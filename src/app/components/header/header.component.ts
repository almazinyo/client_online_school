import {Component, ElementRef} from '@angular/core';
import {SectionService} from '../section/section.service';
import {MenuService} from '../menu/menu.service';
import {Router} from '@angular/router';
import {AuthService} from '../auth/auth.service';
import {GlobalParamsAuth} from '../../storage/global-params-auth';
import {SessionStorageService} from '../../storage/session-storage.service';
import {GlobalParamsUser} from '../../storage/global-params-user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  menu: InterFaceMenu[] = [];
  checkAuth = false;
  fio = '';

  constructor(private sectionService: SectionService,
              private router: Router,
              private authService: AuthService,
              private globalParamsAuth: GlobalParamsAuth,
              private elementRef: ElementRef,
              private menuService: MenuService,
              private globalParamsUser: GlobalParamsUser,
              private sessionStorageService: SessionStorageService) {
    this.menuService.getMenu().then((data: InterFaceMenu[]) => {
        this.menu = data;
      },
      (error) => {
        console.log('Ошибка при получении меню: ', error);
      });

    this.sessionStorageService.authenticated.subscribe(item => {
      this.fio = this.globalParamsUser.fio;
      this.checkAuth = item;
    });
  }

  // переход на ссылку
  getSection(slug) {
    this.router.navigate(['/section/' + slug]);
  }

  auth() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.innerText = 'VK.init({apiId: 7200615});VK.Widgets.Auth(\'vk_auth\', {\'authUrl\': \'/site/auth?authclient=vkontakte\',onAuth: function(){location.reload()}})';
    this.elementRef.nativeElement.appendChild(s);
    this.globalParamsAuth.showModalAuth = true;
  }

  exit() {
    this.authService.exit().then(() => {
        this.sessionStorageService.exit();
      },
      (error) => {
        console.log('Ошибка при  выходе: ', error);
      });
  }
}
