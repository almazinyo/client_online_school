import {Component} from '@angular/core';
import {SectionService} from '../section/section.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  things: any;

  constructor(private sectionService: SectionService,
              private router: Router) {

    this.things = [
      {name: 'Физика', link: 'physics', logo: '---icon-menu-map'},
      {name: 'Математика', link: 'maths', logo: '---icon-menu-physics'},
      {name: 'Химия', link: 'chemistry', logo: '---icon-menu-russian'},
    ];
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
