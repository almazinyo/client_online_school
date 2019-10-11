import {Component} from '@angular/core';
import {WorkService} from './work.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
})
export class WorkComponent {
  work: InterFaceWork = {
    title: '',
    id: null,
    description: '',
    work: [],
    allWorks: [],
    test: []
  };

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
        this.work = data;
        this.currentTest = this.work.test[0];
      },
      (error) => {
        console.log('Ошибка при получении информации об уроке: ', error);
      });
  }

  nextQuestion() {
    this.answerTest.push({id: this.currentTest.id, answer: this.answer});
    this.countAnswer++;
    this.currentTest = this.work.test[this.countAnswer];
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
