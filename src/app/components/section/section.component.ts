import {Component} from '@angular/core';
import {SectionService} from './section.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
})
export class SectionComponent {

  constructor(private sectionService: SectionService) {
    this.sectionService.getSection().then((data: any) => {
        console.log(1, data);
      },
      (error) => {
        console.log('Ошибка при получении списка полей заявки: ', error);
      });
  }
}
