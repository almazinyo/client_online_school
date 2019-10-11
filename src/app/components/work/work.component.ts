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
    test: {id: null, url: ''}
  };

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
      },
      (error) => {
        console.log('Ошибка при получении информации об уроке: ', error);
      });
  }
}
