import {Component} from '@angular/core';
import {SubsectionService} from './subsection.service';

@Component({
  selector: 'app-subsection',
  templateUrl: './subsection.component.html',
})
export class SubsectionComponent {

  subsection: any = [];

  constructor(private subsectionService: SubsectionService) {
    this.subsectionService.getSubSection().then((data: any) => {
        this.subsection = data;
      },
      (error) => {
        console.log('Ошибка при получении информации о разделе: ', error);
      });
  }
}
