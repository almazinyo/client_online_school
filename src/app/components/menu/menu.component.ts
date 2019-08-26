import {Component} from '@angular/core';
import {SectionService} from '../section/section.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  constructor(private sectionService: SectionService) {

  }

  // переход на ссылку
  getSection(param) {
    if (param === '') {
      return false;
    }

    this.sectionService.sectionCurrent = param;
  }
}
