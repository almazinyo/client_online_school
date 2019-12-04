import {Component} from '@angular/core';
import {AuthService} from './auth.service';
import {MenuService} from '../menu/menu.service';

@Component({
  selector: 'app-client',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  user: any;
  output: any;


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


    this.user = [
      {
        output: 'Отзывы',
        aboutCourses: 'о курсах',
        allReviews: 'Все отзывы',
      },
    ];

    this.output = [
      {
        img: 'assets/imgs/users/1.svg',
        name: 'Максим Мироненко',
        thumb: 'Курс Математики / Оценка ',
        rating: '5',
        text: 'Курс отличный, очень полезный. Я считаю, что обязателен для всех, кто хочет развиваться в этой сфере. Сложен для',

      },
      {
        img: 'assets/imgs/users/2.svg',
        name: 'Александр Баль',
        thumb: 'Курс Математики / Оценка ',
        rating: '5',
        text: 'Курс отличный - ничего лишнего - методички совпадают с излагаемым материалом - преподаватель старается разжевать\n' +
          '        на первый взгляд непростые темы, очень все достойно, - наконец то ушли от клик митинга - зум рулит.\n' +
          '     ',

      },
      {
        img: 'assets/imgs/users/1.svg',
        name: 'Максим Мироненко',
        thumb: 'Курс Математики / Оценка ',
        rating: '5',
        text: 'Курс отличный - ничего лишнего - методички совпадают с излагаемым материалом - преподаватель старается разжевать\n' +
          '        на первый взгляд непростые темы, очень все достойно, - наконец то ушли от клик митинга - зум рулит.\n' +
          '     ',

      },
      {
        img: 'assets/imgs/users/2.svg',
        name: 'Александр Баль',
        thumb: 'Курс Математики / Оценка ',
        rating: '5',
        text: 'Курс отличный - ничего лишнего - методички совпадают с излагаемым материалом - преподаватель старается разжевать\n' +
          '        на первый взгляд непростые темы, очень все достойно, - наконец то ушли от клик митинга - зум рулит.\n' +
          '     ',

      }
    ];

  }
}
