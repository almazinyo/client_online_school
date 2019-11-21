import {Component} from '@angular/core';
import {AuthService} from './components/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(private authService: AuthService) {
    this.authService.getInit().then((data) => {
        console.log(1, data);
      },
      (error) => {
        console.log('Ошибка при получении информации о клиенте: ', error);
      });
  }
}


