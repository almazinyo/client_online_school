import {Component} from '@angular/core';
import {BreadcrumbsService} from '../breadcrumbs/breadcrumbs.service';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
})
export class InstructionComponent {

  constructor(private breadcrumbsService: BreadcrumbsService) {
    this.breadcrumbsService.title = '';
  }
}
