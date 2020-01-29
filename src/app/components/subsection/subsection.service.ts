import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class SubsectionService {
  courseCurrent = '';
  coursesCurrent = [];

  constructor(private httpService: HttpService) {
  }

  get pubId(): string {
    return this.courseCurrent;
  }

  set pubId(value: string) {
    this.courseCurrent = value;
  }

  // получение списка активных полей
  public getSubSection(slug) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/sections/details/' + slug)
        .then((result: any) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении списка разделов предмета', error);
            reject();
          }
        );
      // const result = {
      //   'thing': 'физике',
      //   'section': 'Механика',
      //   'description': 'Слушатели ознакомятся с основными механическими явлениями и методами их теоретического описания.',
      //   'text': 'Построение курса традиционно. Курс охватывает классический материал по курсу общей физики, раздел «Механика», читающийся на первом курсе физического факультета МГУ в первом семестре. В курсе будут представлены разделы «Кинематика и динамика материальной точки и простейших систем», «Законы сохранения», «Движение материальной точки в неинерциальных системах отсчета», «Основы релятивистской механики», «Кинематика и динамика твердого тела» «Основы механики деформируемых сред», «Основы гидромеханики и аэромеханики», «Механические колебания и волны».',
      //   'courses': [
      //     {
      //       'id': 1,
      //       'slug': '1',
      //       'background': '#ec407a',
      //       'name': 'Кинематика и динамика простейших систем',
      //       'description': '20 видео уроков',
      //       'lessons': [
      //         {id: 1, name: 'Закон сохранения импульса'},
      //         {id: 2, name: 'Пространство и время в теории относительности'},
      //         {id: 3, name: 'Пространство и время в теории относительности'},
      //       ],
      //       'price': '800'
      //     },
      //     {
      //       'id': 2,
      //       'slug': '2',
      //       'background': '#ec407a',
      //       'name': 'Законы сохранения в простейших системах',
      //       'description': '21 видео уроков',
      //       'lessons': [
      //         {id: 1, name: 'Закон сохранения импульса'},
      //         {id: 2, name: 'Пространство и время в теории относительности'},
      //         {id: 3, name: 'Пространство и время в теории относительности'},
      //       ],
      //       'price': '900'
      //     },
      //     {
      //       'id': 3,
      //       'slug': '3',
      //       'background': '#29b6f6',
      //       'name': 'Неинерциальные системы отсчета',
      //       'description': '22 видео уроков',
      //       'lessons': [
      //         {id: 1, name: 'Закон сохранения импульса'},
      //         {id: 2, name: 'Пространство и время в теории относительности'},
      //         {id: 3, name: 'Пространство и время в теории относительности'},
      //       ],
      //       'price': '1000'
      //     }
      //   ]
      // };
      // resolve(result);
    });
  }

  // получение списка активных полей
  public usePromotionalCode(slug) {
    return new Promise((resolve, reject) => {
      resolve(5000);
      /*this.httpService.prepareQuery('api/sections/details/' + slug)
        .then((result: any) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении списка разделов предмета', error);
            reject();
          }
        );*/
    });
  }

  getPayment(price) {
    return new Promise((resolve, reject) => {
      const body = new URLSearchParams();
      body.set('receiver', '410013781874599');
      body.set('label', 'test-test-label');
      body.set('operation_id', '1');
      body.set('operation-details', 'true');
      body.set('formcomment', 'Examator');
      body.set('short-dest', 'Онлайн школа examator.ru');
      body.set('quickpay-form', 'shop');
      body.set('targets', 'Examator');
      body.set('sum', '2');
      body.set('comment', 'Платеж  за  урока ... ');
      body.set('message', 'Платеж  за  урока ... ');
      body.set('codepro', 'true');
      body.set('successURL', 'http://dev.examator.ru/');
      body.set('paymentType', 'payment-shop');

      this.httpService.prepareQueryYandex('https://money.yandex.ru/quickpay/confirm.xml', body)
        .then((result) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при сохранении детальной информации по профилю', error);
            reject();
          }
        );
    });
  }

}
