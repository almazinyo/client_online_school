import {Component} from '@angular/core';
import {SubsectionService} from './subsection.service';
import {ActivatedRoute, Params} from '@angular/router';
import {HttpService} from '../../utils/http/http.service';


@Component({
  selector: 'app-subsection',
  templateUrl: './subsection.component.html',
})
export class SubsectionComponent {

  subsection: InterFaceSubSection = {
    thing: '',
    section: '',
    name: '',
    img_path: '',
    short_description: '',
    description: '',
    subject: {title: ''},
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

  constructor(private subsectionService: SubsectionService,
              private httpService: HttpService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(
      (params: Params): void => {
        this.getSubsection(params.id);
      }
    );
  }

  getSubsection(slug) {
    this.subsectionService.getSubSection(slug).then((data: InterFaceSubSection) => {
        this.subsection = data;
        console.log('hello');
        console.log(this.subsection);
      },
      (error) => {
        console.log('Ошибка при получении информации о разделе: ', error);
      });
  }

  public payment(price) {
    return new Promise((resolve, reject) => {
      let data =
        {
          'receiver': '410013781874599',
          'label': 'test-test-label',
          'operation_id': '1',
          'operation-details': 'true',
          'formcomment': 'Examator',
          'short-dest': 'Онлайн школа examator.ru',
          'quickpay-form': 'shop',
          'targets': 'Examator',
          'sum': '2',
          'comment': 'Платеж  за  урока ... ',
          'message': 'Платеж  за  урока ...',
          'codepro': 'true',
          'successURL': 'http://dev.examator.ru/',
          'paymentType': 'payment-shop'
        };

      this.httpService.prepareQuery('https://money.yandex.ru/quickpay/confirm.xml', {data: data}, true)
        .then(() => {
            resolve();
          },
          (error) => {
            console.log('Ошибка при сохранении детальной информации по профилю', error);
            reject();
          }
        );
    });
  }
}
