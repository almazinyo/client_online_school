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
  sections: InterFaceSection = {title: '', sectionSubjects: []};

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
          this.sections = data;
        },
        (error) => {
          console.log('Ошибка при получении списка полей заявки: ', error);
          this.sections = {title: '', sectionSubjects: []};
        });
    });
  }

  getWork(data) {
    this.router.navigate(['/work/' + data.slug + '/' + data.lessons[0].slug]);
  }
}
