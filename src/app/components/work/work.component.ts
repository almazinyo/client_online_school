import {Component, ElementRef, ViewChild} from '@angular/core';
import {WorkService} from './work.service';
import {Router} from '@angular/router';
import {ActivatedRoute, Params} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {GlobalParamsMessage} from '../message_alert/global-params-message';
import {GlobalParamsUser} from '../../storage/global-params-user';
import {SubsectionService} from '../subsection/subsection.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
})
export class WorkComponent {
  @ViewChild('videoPlayer') videoplayer: ElementRef;

  // индекс текущего теста
  testIndex = 0;
  section: InterFaceWork = {
    background: '',
    created_at: '',
    description: '',
    subject_id: '',
    id: '',
    is_status: '',
    price: '',
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

  lesson: InterFaceLesson = {id: '', name: '', section_id: '', slug: '', is_status: '', is_bought: false};
  test: InterFaceTestWork[] = [{hint: '', id: '', lessons_id: '', question: '', correct_answer: '', bonus_points: ''}];
  storage: any = [];
  teachers: InterFaceTeachers = {name: ''};

  currentTest: InterFaceTestWork = {hint: '', id: '', lessons_id: '', question: '', correct_answer: '', bonus_points: ''};
  answerTest: { id: string, answer: string, hint: boolean, points: string }[] = [];
  answer = '';
  countAnswer = 0;

  promo = '';

  showCheckImg = false;
  modalImg = '';

  // отображение кнопки на плеере
  showButton = true;
  params;

  buyModal = {
    show: false,
    price: '',
    new_price: '',
    slug: '',
    sale: 0,
  };

  constructor(private workService: WorkService,
              private router: Router,
              private globalParamsMessage: GlobalParamsMessage,
              private activatedRoute: ActivatedRoute,
              public globalParamsUser: GlobalParamsUser,
              public subsectionService: SubsectionService,
              public sanitizer: DomSanitizer) {

    this.activatedRoute.params.subscribe(
      (params: Params): void => {
        this.params = params;
        this.getWorkCurrent(params.id, params.ss);
      }
    );
  }

  getWorkCurrent(slugSection, slugLesson) {

    this.workService.getWork(slugSection, slugLesson).then((data: InterFaceWork) => {
        this.section = data;

        this.lesson = data['lessons'][0] || '';
        this.test = data['lessons'].length > 0 ? data['lessons'][0]['quizzes'] : [];
        this.storage = data['lessons'].length > 0 ? data['lessons'][0]['storageLessons'] : [];
        this.teachers = data['subject']['teachers'][0];
        this.currentTest = this.test[0];
        this.countAnswer = 0;

        for (let i = 0; i < this.storage.length; i++) {
          if (this.storage[i].type === 'pdf') {
            this.storage[i].url =
              this.sanitizer.bypassSecurityTrustResourceUrl('http://api.examator.ru/images/lessons/' + this.storage[i].name);
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

  answerCurrentTest() {
    this.answer = this.answer.replace(',', '.');
    this.test[this.testIndex].correct_answer = this.test[this.testIndex].correct_answer.replace(',', '.');
    if (this.test[this.testIndex].correct_answer !== this.answer || this.answerTest[this.testIndex].answer !== '') {

      if (this.answerTest[this.testIndex].answer === '') {
        this.globalParamsMessage.data = {
          title: 'Неверный ответ',
          body: 'Правильный ответ: ' + this.test[this.testIndex].correct_answer,
          type: 'error'
        };
      } else {
        this.globalParamsMessage.data = {
          title: 'Вы уже ответили на этот вопрос',
          body: '',
          type: 'error'
        };
      }

      this.answerTest[this.testIndex].answer = this.answer;
    } else {
      this.answerTest[this.testIndex].points = this.answerTest[this.testIndex].hint ? '0' : this.test[this.testIndex].bonus_points;
      this.answerTest[this.testIndex].answer = this.answer;
      this.testIndex++;
      this.answer = '';
    }

    console.log(this.answerTest);
  }

  sendAnswer() {
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
        this.answerTest = [];
        this.testIndex = 0;
        this.answer = '';
      },
      (error) => {
        console.log('Ошибка при отправке тестов: ', error);
        this.answerTest = [];
        this.testIndex = 0;
        this.answer = '';
      });
  }

  checkImg(data, type = 'img') {
    if (type === 'img') {
      this.modalImg = 'http://api.examator.ru/images/question/' + data;
    } else {
      this.answerTest[this.testIndex].hint = true;
      this.modalImg = 'http://api.examator.ru/images/question/hint/' + data;
    }
    this.showCheckImg = true;
  }

  toggleVideo(event: any) {
    this.showButton = !this.showButton;
    this.videoplayer.nativeElement.play();
  }

  prevTest() {
    this.testIndex -= 1;
    this.answer = '';
  }

  nextTest() {
    this.testIndex += 1;
    this.answer = '';
  }

  changeShowBuy(price, slug) {
    this.buyModal = {
      show: true,
      price: price,
      slug: slug,
      sale: 0,
      new_price: price,
    };
  }

  usePromotionalCode() {
    if (this.promo !== '') {
      this.subsectionService.usePromotionalCode({
        price: this.buyModal.price,
        slug: this.buyModal.slug,
        promo: this.promo
      }).then((data: { old_price: string, new_price: string, percent: number, is_valid: boolean }) => {
          this.buyModal.new_price = data.new_price;
          this.buyModal.sale = data.percent;

          if (!data.is_valid) {
            this.globalParamsMessage.data = {type: 'error', title: 'Неверно указан промо-код', body: ''};
          }
        },
        (error) => {
          console.log('Ошибка при получении информации о разделе: ', error);
        });
    }
  }

  changeLessons(section_slug, currentWork_slug) {
    this.answerTest = [];
    this.testIndex = 0;
    this.answer = '';
    this.router.navigate(['work' + '/' + section_slug + '/' + currentWork_slug]);
  }
}
