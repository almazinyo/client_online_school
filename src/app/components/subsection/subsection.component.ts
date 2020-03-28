import {Component} from '@angular/core';
import {SubsectionService} from './subsection.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {HttpService} from '../../utils/http/http.service';
import {GlobalParamsUser} from '../../storage/global-params-user';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {GlobalParamsMessage} from '../message_alert/global-params-message';
import {MenuService} from '../menu/menu.service';


@Component({
  selector: 'app-subsection',
  templateUrl: './subsection.component.html',
})

export class SubsectionComponent {
  buyModal = {
    show: false,
    price: '',
    new_price: '',
    slug: '',
    sale: 0,
  };

  subsection: InterFaceSubSection = {
    thing: '',
    section: '',
    slug: '',
    name: '',
    img_path: '',
    short_description: '',
    description: '',
    price: '',
    stock: '',
    stock_description: '',
    subject: {title: '', price: '', stock: ''},
    courses: [{
      background: '',
      name: '',
      slug: '',
      description: '',
      lessons: [{
        name: '',
        price: '',
      }]
    }]
  };

  promo = '';
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

  constructor(private subsectionService: SubsectionService,
              private httpService: HttpService,
              public globalParamsUser: GlobalParamsUser,
              public menuService: MenuService,
              private router: Router,
              private sanitizer: DomSanitizer,
              private globalParamsMessage: GlobalParamsMessage,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(
      (params: Params): void => {
        this.getSubsection(params.id);
      }
    );

    this.menuService.getButtons().then((data: any) => {
        this.buttons = data;
      },
      (error) => {
        console.log('Ошибка при получении кнопок: ', error);
      });
  }

  changeShowBuy(price, slug) {
    this.buyModal = {
      show: true,
      price: price,
      slug: slug,
      sale: 0,
      new_price: price,
    };
  }

  usePromotionalCode() {
    if (this.promo !== '') {
      this.subsectionService.usePromotionalCode({
        price: this.buyModal.price,
        slug: this.buyModal.slug,
        promo: this.promo
      }).then((data: { old_price: string, new_price: string, percent: number, is_valid: boolean }) => {
          this.buyModal.new_price = data.new_price;
          this.buyModal.sale = data.percent;

          if (!data.is_valid) {
            this.globalParamsMessage.data = {type: 'error', title: 'Неверно указан промо-код', body: ''};
          }
        },
        (error) => {
          console.log('Ошибка при получении информации о разделе: ', error);
        });
    }
  }

  getSubsection(slug) {
    this.subsectionService.getSubSection(slug).then((data: InterFaceSubSection) => {
        this.subsection = data;
      },
      (error) => {
        console.log('Ошибка при получении информации о разделе: ', error);
      });
  }

  payment(price) {
    this.subsectionService.getPayment(price).then((data: InterFaceSubSection) => {
      },
      (error) => {
        console.log('Ошибка при получении информации о разделе: ', error);
      });
  }

  getWork(data) {
    this.router.navigate(['/work/' + data.slug + '/' + data.lessons[0].slug]);
  }

  buyAll() {
    if (this.globalParamsUser.fio === null) {
      this.globalParamsMessage.data = {type: 'error', title: 'Необходимо авторизоваться', body: ''};
      return false;
    }
    this.buyModal = {
      show: true,
      price: this.subsection.subject.price,
      slug: this.subsection.slug,
      sale: parseInt(this.subsection.subject.stock, 10),
      new_price: (parseInt(this.subsection.subject.price, 10) - ((parseInt(this.subsection.subject.price, 10) * parseInt(this.subsection.subject.stock, 10) / 100))).toString(),
    };
  }
}
