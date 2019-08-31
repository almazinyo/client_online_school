import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {SubsectionService} from '../subsection/subsection.service';
import {SectionService} from './section.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
})
export class SectionComponent {

  sections: any;
  tests: any;

  constructor(private sectionService: SectionService,
              private subsectionService: SubsectionService,
              private router: Router) {
    this.sectionService.getSection().then((data: any) => {
        this.sections = data.sections;
        this.tests = data.tests;

        console.log(1, this.sections);
      },
      (error) => {
        console.log('Ошибка при получении списка полей заявки: ', error);
      });
  }

  getSubsection(param) {
    console.log(1, param);
    if (param === '') {
       return false;
     }

     this.subsectionService.courseCurrent = param;
    this.router.navigate(['subsection']);
  }
}
