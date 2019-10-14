import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {SubsectionService} from '../subsection/subsection.service';
import {SectionService} from './section.service';
import {WorkService} from '../work/work.service';
import {BreadcrumbsService} from '../breadcrumbs/breadcrumbs.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
})
export class SectionComponent implements OnInit {
  sections: InterFaceSection[] = [];
  tests: InterFaceTest[] = [];

  constructor(private sectionService: SectionService,
              private subsectionService: SubsectionService,
              private workService: WorkService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private breadcrumbsService: BreadcrumbsService) {
    this.breadcrumbsService.title = '';
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(routeParams => {
      this.sectionService.getSection(routeParams.id).then((data: any) => {
          this.sections = data[0];
          this.tests = data.tests;
        },
        (error) => {
          console.log('Ошибка при получении списка полей заявки: ', error);
        });
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
