import {Component, ElementRef, ViewChild} from '@angular/core';
import {WorkService} from './work.service';
import {Router} from '@angular/router';
import {ActivatedRoute, Params} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {GlobalParamsMessage} from '../message_alert/global-params-message';
import {GlobalParamsUser} from '../../storage/global-params-user';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
})
export class WorkComponent {
  @ViewChild('videoPlayer') videoplayer: ElementRef;

  section: InterFaceWork = {
    background: '',
    created_at: '',
    description: '',
    subject_id: '',
    id: '',
    is_status: '',
    logo: '',
    name: '',
    quizzes: [],
    section: {id: '', subject_id: '', parent_id: null, name: '', slug: ''},
    section_id: '',
    seo_description: '',
    seo_keywords: '',
    short_description: '',
    slug: '',
    sort_lessons: '',
    storageLessons: [],
    updated_at: '',
    allLessons: [{
      id: '',
      is_status: '',
      name: '',
      section_id: '',
      slug: ''
    }]
  };

  lesson: InterFaceLesson = {id: '', name: '', section_id: ''};
  test: InterFaceTestWork[] = [{hint: '', id: '', lessons_id: '', question: '', correct_answer: '', bonus_points: ''}];
  storage: any;
  teachers: InterFaceTeachers = {name: ''};

  currentTest: InterFaceTestWork = {hint: '', id: '', lessons_id: '', question: '', correct_answer: '', bonus_points: ''};
  answerTest: { id: string, answer: string, hint: boolean, points: string }[] = [];
  answer = '';
  countAnswer = 0;
  showTest = false;

  showCheckImg = false;
  modalImg = '';

  // отображение кнопки на плеере
  showButton = true;
  notPush = false;

  constructor(private workService: WorkService,
              private router: Router,
              private globalParamsMessage: GlobalParamsMessage,
              private activatedRoute: ActivatedRoute,
              public globalParamsUser: GlobalParamsUser,
              public sanitizer: DomSanitizer) {

    this.activatedRoute.params.subscribe(
      (params: Params): void => {
        this.getWorkCurrent('2', params.id);
      }
    );
  }

  getWorkCurrent(is_status, slug, slugLesson = '') {
    if (is_status === '2') {
      this.workService.getWork(slug, slugLesson).then((data: InterFaceWork) => {
          this.section = data;
          this.lesson = data['lessons'][0];
          this.test = data['lessons'][0]['quizzes'];
          this.storage = data['lessons'][0]['storageLessons'];
          this.teachers = data['subject']['teachers'][0];
          this.currentTest = this.test[0];
          this.countAnswer = 0;
          this.showTest = this.test.length > 0;

          for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i].type === 'pdf') {
              this.storage[i].url = this.sanitizer.bypassSecurityTrustResourceUrl('http://api.examator.ru/images/lessons/' + this.storage[i].name);
            }
          }

          for (let i = 0; i < this.test.length; i++) {
            this.answerTest.push({id: this.test[i].id, answer: '', hint: false, points: '0'});
          }
        },
        (error) => {
          console.log('Ошибка при получении информации об уроке: ', error);
        });
    }
  }

  nextQuestion() {
    this.currentTest = this.test[this.countAnswer + 1];
    this.countAnswer++;
    this.notPush = false;
    this.answer = '';
  }

  nextQuestionAnswer() {
    this.answerTest[this.countAnswer].answer = this.answer;

    if (this.currentTest.correct_answer !== this.answer) {
      this.notPush = true;
      this.globalParamsMessage.data = {
        title: 'Неверный ответ',
        body: 'Правильный ответ: ' + this.currentTest.correct_answer,
        type: 'error'
      };
      this.answerTest[this.countAnswer].points = '0';
    } else {
      this.answerTest[this.countAnswer].points = this.answerTest[this.countAnswer].hint ? '0' : this.currentTest.bonus_points;
      this.currentTest = this.test[this.countAnswer + 1];
      this.countAnswer++;
      this.notPush = false;
      this.answer = '';
    }
  }

  sendAnswer() {
    this.answerTest[this.countAnswer].answer = this.answer;
    this.answerTest[this.countAnswer].points = this.answerTest[this.countAnswer].hint ? '0' : this.currentTest.bonus_points;

    this.workService.sendAnswer({
        section_id: this.lesson.section_id,
        lesson_id: this.lesson.id,
        subject_id: this.section.subject_id,
        data: this.answerTest
      }
    ).then((result: { correct_answers: number, wrong_answers: number }) => {
        this.globalParamsMessage.data = {
          title: 'Результат',
          body: 'Количество правильных ответов: ' + result.correct_answers + '. Количество неправильных ответов: ' + result.wrong_answers,
          type: 'error'
        };
      },
      (error) => {
        console.log('Ошибка при отправке тестов: ', error);
      });
  }


  checkImg(data, type = 'img') {
    if (type === 'img') {
      this.modalImg = 'http://api.examator.ru/images/question/' + data;
    } else {
      this.answerTest[this.countAnswer].hint = true;
      this.modalImg = 'http://api.examator.ru/images/question/hint/' + data;
    }
    this.showCheckImg = true;
  }

  toggleVideo(event: any) {
    this.showButton = !this.showButton;
    this.videoplayer.nativeElement.play();
  }
}
