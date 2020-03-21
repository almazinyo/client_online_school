import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {MenuService} from '../menu/menu.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {

  footers: InterFaceFooter[] = [];
  buttons = [{'name': 'Выбрать бесплатный урок', 'slug': '#'}, {'name': 'Учителя', 'slug': '/teacher'}, {
    'name': 'Отзывы',
    'slug': '/reviews'
  }, {'name': 'Блог', 'slug': '/blog'}, {
    'name': ' Начать учиться ',
    'slug': 'https://vk.com/app5898182_-185278877#s=493523'
  }, {'name': ' Запись на пробный курс ', 'slug': 'https://vk.com/app5898182_-185278877#s=493523'}, {
    'name': 'Купить все курсы',
    'slug': '#'
  }];

  constructor(private router: Router,
              private menuService: MenuService) {
    this.menuService.getMenuCheck.subscribe(item => {
      this.footers = this.menuService.menu;
    });

    this.menuService.getButtons().then((data: any) => {
        this.buttons = data;
      },
      (error) => {
        console.log('Ошибка при получении кнопок: ', error);
      });
  }

  // переход на ссылку
  getSection(currentMenu) {
    if (currentMenu.is_status !== '2') {
      this.router.navigate(['/work/' + currentMenu.slug]);
    }
  }
}
