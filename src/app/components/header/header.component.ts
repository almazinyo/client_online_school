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
  subject = {
    show: false,
    data: true
  };

  constructor(private sectionService: SectionService,
              private router: Router,
              private authService: AuthService,
              private globalParamsAuth: GlobalParamsAuth,
              private elementRef: ElementRef,
              private menuService: MenuService,
              private globalParamsUser: GlobalParamsUser,
              private sessionStorageService: SessionStorageService) {

    this.menu = this.menuService.menu;
    this.menuService.getMenuCheck.subscribe(item => {
      this.menu = this.menuService.menu;
    });


    this.sessionStorageService.authenticated.subscribe(item => {
      this.fio = this.globalParamsUser.fio;
      this.checkAuth = item;
    });
  }

  // переход на ссылку
  getSection(currentMenu) {
    if (currentMenu.is_status !== '2') {
      this.router.navigate(['/section/' + currentMenu.slug]);
    }
  }

  auth() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.innerText = 'VK.init({apiId: 7200615});VK.Widgets.Auth(\'vk_auth\', {\'authUrl\': \'/site/auth?authclient=vkontakte\',onAuth: function(){window.location.href = \'http://dev.examator.ru/profile-details\';}})';
    this.elementRef.nativeElement.appendChild(s);
    this.globalParamsAuth.showModalAuth = true;
  }
}
