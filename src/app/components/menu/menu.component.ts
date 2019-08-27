import {Component} from '@angular/core';
import {SectionService} from '../section/section.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  constructor(private sectionService: SectionService,
              private router: Router) {

  }

  // переход на ссылку
  getSection(param) {
    if (param === '') {
      return false;
    }

    this.sectionService.sectionCurrent = param;
    this.router.navigate(['section']);
  }
}
