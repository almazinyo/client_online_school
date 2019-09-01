import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {SubsectionService} from '../subsection/subsection.service';
import {SectionService} from './section.service';
import {WorkService} from '../work/work.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
})
export class SectionComponent {

  sections: any;
  tests: any;

  constructor(private sectionService: SectionService,
              private subsectionService: SubsectionService,
              private workService: WorkService,
              private router: Router) {
    this.sectionService.getSection().then((data: any) => {
        this.sections = data.sections;
        this.tests = data.tests;
      },
      (error) => {
        console.log('Ошибка при получении списка полей заявки: ', error);
      });
  }

  // переход в разделы
  getSubsection(param) {
    if (param === '') {
      return false;
    }
    this.subsectionService.courseCurrent = param;
    this.router.navigate(['subsection']);
  }

  // переход на урок
  getWork(param) {
    if (param === '') {
      return false;
    }
    this.workService.currentWork = param;
    this.router.navigate(['work']);
  }
}
