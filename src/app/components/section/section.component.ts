import {Component} from '@angular/core';
import {SectionService} from './section.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
})
export class SectionComponent {

  sections: any;
  tests: any;

  constructor(private sectionService: SectionService) {
    this.sectionService.getSection().then((data: any) => {
        this.sections = data.sections;
        this.tests = data.tests;

        console.log(1, this.sections);
      },
      (error) => {
        console.log('Ошибка при получении списка полей заявки: ', error);
      });
  }
}
