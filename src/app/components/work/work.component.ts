import {Component} from '@angular/core';
import {WorkService} from './work.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
})
export class WorkComponent {

  work = {};

  constructor(private workService: WorkService) {
    this.workService.getWork().then((data: any) => {
        this.work = data;
      },
      (error) => {
        console.log('Ошибка при получении информации об уроке: ', error);
      });
  }
}
