import {Component} from '@angular/core';
import {BreadcrumbsService} from './breadcrumbs.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
})
export class BreadcrumbsComponent {
  currentTitle: any;

  constructor(private breadcrumbsService: BreadcrumbsService) {
    this.currentTitle = breadcrumbsService;
  }
}
