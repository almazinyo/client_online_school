import {Component} from '@angular/core';
import {WorkService} from './work.service';
import {Router} from '@angular/router';
import {ActivatedRoute, Params} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
})
export class WorkComponent {
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

  lesson: InterFaceLesson = {name: ''};
  test: InterFaceTestWork[] = [{hint: '', id: '', lessons_id: '', question: ''}];
  storage: any;
  teachers: InterFaceTeachers = {name: ''};

  currentTest: InterFaceTestWork = {hint: '', id: '', lessons_id: '', question: ''};
  answerTest: { id: string, answer: string }[] = [];
  answer = '';
  countAnswer = 0;

  constructor(private workService: WorkService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private dom: DomSanitizer) {

    this.activatedRoute.params.subscribe(
      (params: Params): void => {
        this.getWork(params.id);
      }
    );
  }

  getWork(slug,) {
    this.workService.getWork(slug).then((data: InterFaceWork) => {
        this.section = data;
        this.lesson = data['lessons'][0];
        this.test = data['lessons'][0]['quizzes'];
        this.storage = data['lessons'][0]['storageLessons'];
        this.teachers = data['subject']['teachers'][0];
        this.currentTest = this.test[0];
        this.countAnswer = 0;

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
        console.log(1, data);

        this.lesson = data['lessons'][0];
        //this.test = data['lessons'][0]['quizzes'];
        this.storage = data['lessons'][0]['storageLessons'];
        //this.teachers = data['subject']['teachers'][0];
        //this.currentTest = this.test[0];
        //this.countAnswer = 0;

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
    console.log(111, this.answerTest);
    /*this.workService.sendAnswer({data: this.answer}).then(() => {
        console.log('Тест пройден');
      },
      (error) => {
        console.log('Ошибка при отправке тестов: ', error);
      });*/
  }

  getTeacher(slug) {
    this.router.navigate(['teacher/' + slug]);
  }
}
