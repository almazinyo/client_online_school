import {Component} from '@angular/core';
import {SectionService} from '../section/section.service';
import {MenuService} from '../menu/menu.service';
import {Router} from '@angular/router';
import {AuthService} from '../auth/auth.service';
import {GlobalParamsAuth} from '../../storage/global-params-auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  menu: InterFaceMenu[] = [];

  constructor(private sectionService: SectionService,
              private router: Router,
              private authService: AuthService,
              private globalParamsAuth: GlobalParamsAuth,
              private menuService: MenuService) {
    this.menuService.getMenu().then((data: InterFaceMenu[]) => {
        this.menu = data;
      },
      (error) => {
        console.log('Ошибка при получении меню: ', error);
      });
  }

  // переход на ссылку
  getSection(slug) {
    this.router.navigate(['/section/' + slug]);
  }

  auth() {
    this.globalParamsAuth.showModalAuth = true;
  }
}
