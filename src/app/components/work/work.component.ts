import {Component} from '@angular/core';
import {WorkService} from './work.service';
import {ActivatedRoute, Params} from '@angular/router';

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
  };

  lesson: InterFaceLesson = {name: ''};
  test: InterFaceTestWork = {question: ''};
  storage: any;
  teachers: any;

  currentTest: { id: number, url: string } = {id: null, url: ''};
  answerTest: { id: number, answer: string }[] = [];
  answer = '';
  countAnswer = 0;

  constructor(private workService: WorkService,
              private activatedRoute: ActivatedRoute) {

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
        this.teachers = data['teachers'];
      },
      (error) => {
        console.log('Ошибка при получении информации об уроке: ', error);
      });
  }

  nextQuestion() {
    this.answerTest.push({id: this.currentTest.id, answer: this.answer});
    this.countAnswer++;
    // this.currentTest = this.work.test[this.countAnswer];
    this.answer = '';
  }

  sendAnswer() {
    this.workService.sendAnswer({data: this.answer}).then(() => {
        console.log('Тест пройден');
      },
      (error) => {
        console.log('Ошибка при отправке тестов: ', error);
      });
  }
}
