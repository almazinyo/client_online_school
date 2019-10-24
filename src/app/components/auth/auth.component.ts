import {Component} from '@angular/core';
import {AuthService} from './auth.service';
import {MenuService} from '../menu/menu.service';

@Component({
  selector: 'app-client',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  data: InterFaceMain[] = [];
  menu: InterFaceMenu[] = [];

  constructor(private authService: AuthService,
              private menuService: MenuService) {

    this.authService.getData().then((data: { mainSection: InterFaceMain[] }) => {
        this.data = data.mainSection;
      },
      (error) => {
        console.log('Ошибка при получении информации на гавный экран: ', error);
      });

    this.menuService.getMenu().then((data: InterFaceMenu[]) => {
        this.menu = data;
      },
      (error) => {
        console.log('Ошибка при получении меню: ', error);
      });
  }
}
