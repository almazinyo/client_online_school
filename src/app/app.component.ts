import {Component} from '@angular/core';
import {AuthService} from './components/auth/auth.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(private authService: AuthService,
              private cookieService: CookieService) {

    const cookie = this.cookieService.get('vk_app_7200615') || '';
    console.log(1, cookie);
    this.authService.getInit(cookie).then((data) => {
        console.log(1, data);
      },
      (error) => {
        console.log('Ошибка при получении информации о клиенте: ', error);
      });
  }
}


