import {Component} from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-client',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  data: InterFaceMain[] = [];

  constructor(private authService: AuthService) {

    this.authService.getData().then((data: { mainSection: InterFaceMain[] }) => {
        this.data = data.mainSection;
      },
      (error) => {
        console.log('Ошибка при получении информации на гавный экран: ', error);
      });
  }
}
