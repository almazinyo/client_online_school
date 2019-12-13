import {Component} from '@angular/core';
import {SectionService} from '../section/section.service';
import {Router} from '@angular/router';
import {MenuService} from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  menu: InterFaceMenu[] = [];

  constructor(private sectionService: SectionService,
              private router: Router,
              private menuService: MenuService) {

    this.menuService.getMenu().then((data: InterFaceMenu[]) => {
      console.log(1,data)
        this.menu = data;
      },
      (error) => {
        console.log('Ошибка при получении меню: ', error);
      });
  }

  // переход на ссылку
  getSection(currentMenu) {
    if (currentMenu.sectionSlug !== null) {
      this.router.navigate(['/section/' + currentMenu.slug]);
    }
  }
}
