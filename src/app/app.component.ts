import {Component} from '@angular/core';
import {AuthService} from './components/auth/auth.service';
import {CookieService} from 'ngx-cookie-service';
import {SessionStorageService} from './storage/session-storage.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(private authService: AuthService,
              private router: Router,
              private location: Location,
              private sessionStorageService: SessionStorageService,
              private cookieService: CookieService) {

    const cookie = this.cookieService.get('vk_app_7200615') || '';
    this.authService.getInit(cookie).then(() => {
      },
      (error) => {
        console.log('Ошибка при получении информации о клиенте: ', error);
      });

    this.sessionStorageService.authenticated.subscribe(item => {
      if (!item && ['/profile-details', '/profile-promotion', '/profile-buy', '/profile-points', '/profile-promotional-code'].indexOf(this.location.path())) {
        this.router.navigate(['/']);
      }
    });
  }
}


