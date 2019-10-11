import {Component} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {SubsectionService} from '../subsection/subsection.service';
import {SectionService} from './section.service';
import {WorkService} from '../work/work.service';
import {BreadcrumbsService} from '../breadcrumbs/breadcrumbs.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
})
export class SectionComponent {
  sections: InterFaceSection;
  tests: InterFaceTest;

  constructor(private sectionService: SectionService,
              private subsectionService: SubsectionService,
              private workService: WorkService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private breadcrumbsService: BreadcrumbsService) {
    this.breadcrumbsService.title = '';

    this.activatedRoute.params.subscribe(
      (params: Params): void => {
        this.getSection(params.id);
      }
    );
  }

  getSection(slug) {
    this.sectionService.getSection(slug).then((data: any) => {
        this.sections = data.sections;
        this.tests = data.tests;
      },
      (error) => {
        console.log('Ошибка при получении списка полей заявки: ', error);
      });
  }

  /* // переход в разделы
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
   }*/
}
