import {Component} from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-client',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  data: any = [];

  constructor(private authService: AuthService) {

    this.authService.getData().then((data: any) => {
        this.data = data;
        console.log(data);
      },
      (error) => {
        console.log('Ошибка при получении информации на гавный экран: ', error);
      });
  }
}
