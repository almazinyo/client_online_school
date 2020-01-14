import {Component, ElementRef, ViewChild} from '@angular/core';
import {WorkService} from './work.service';
import {Router} from '@angular/router';
import {ActivatedRoute, Params} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {GlobalParamsMessage} from '../message_alert/global-params-message';

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

  lesson: InterFaceLesson = {name: '', section_id: ''};
  test: InterFaceTestWork[] = [{hint: '', id: '', lessons_id: '', question: ''}];
  storage: any;
  teachers: InterFaceTeachers = {name: ''};

  currentTest: InterFaceTestWork = {hint: '', id: '', lessons_id: '', question: ''};
  answerTest: { id: string, answer: string }[] = [];
  answer = '';
  countAnswer = 0;
  showTest = false;

  showCheckImg = false;
  modalImg = '';

  // отображение кнопки на плеере
  showButton = true;

  constructor(private workService: WorkService,
              private router: Router,
              private globalParamsMessage: GlobalParamsMessage,
              private activatedRoute: ActivatedRoute,
              private dom: DomSanitizer) {

    this.activatedRoute.params.subscribe(
      (params: Params): void => {
        this.getWork(params.id);
      }
    );
  }

  getWork(slug) {
    this.workService.getWork(slug).then((data: InterFaceWork) => {
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
            this.storage[i].url = this.dom.bypassSecurityTrustResourceUrl('http://api.examator.ru/images/lessons/' + this.storage[i].name);
          }
        }
      },
      (error) => {
        console.log('Ошибка при получении информации об уроке: ', error);
      });
  }

  getWorkCurrent(slug, slugLesson = '') {
    this.workService.getWork(slug, slugLesson).then((data: InterFaceWork) => {
        this.lesson = data['lessons'][0];
        this.test = data['lessons'][0]['quizzes'];
        this.storage = data['lessons'][0]['storageLessons'];
        this.teachers = data['subject']['teachers'][0];
        this.currentTest = this.test[0];
        this.countAnswer = 0;

        this.showTest = this.test.length > 0;

        for (let i = 0; i < this.storage.length; i++) {
          if (this.storage[i].type === 'pdf') {
            this.storage[i].url = this.dom.bypassSecurityTrustResourceUrl('http://api.examator.ru/images/lessons/' + this.storage[i].name);
          }
        }
      },
      (error) => {
        console.log('Ошибка при получении информации об уроке: ', error);
      });
  }

  nextQuestion() {
    this.answerTest.push({id: this.currentTest.id, answer: this.answer});
    this.countAnswer++;
    this.currentTest = this.test[this.countAnswer];
    this.answer = '';
  }

  sendAnswer() {
    this.workService.sendAnswer({
        section_id: this.lesson.section_id,
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
      this.modalImg = 'http://api.examator.ru/images/question/hint/' + data;
    }
    this.showCheckImg = true;
  }

  toggleVideo(event: any) {
    this.showButton = !this.showButton;
    this.videoplayer.nativeElement.play();
  }
}
