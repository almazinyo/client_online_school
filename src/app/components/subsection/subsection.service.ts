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
  public getSubSection() {
    console.log(1, this.coursesCurrent.length);
    return new Promise((resolve, reject) => {
      if (this.coursesCurrent.length === 0) {
        /*this.httpService.prepareQuery('api/get-section', data)
          .then((result: any) => {
              this.coursesCurrent = result;
              resolve(result);
            },
            (error) => {
              console.log('Ошибка при получении списка разделов предмета', error);
              reject();
            }
          );*/
        const result = {
          'thing': 'физике',
          'section': 'Механика',
          'description': 'Слушатели ознакомятся с основными механическими явлениями и методами их теоретического описания.',
          'text': 'Построение курса традиционно. Курс охватывает классический материал по курсу общей физики, раздел «Механика», читающийся на первом курсе физического факультета МГУ в первом семестре. В курсе будут представлены разделы «Кинематика и динамика материальной точки и простейших систем», «Законы сохранения», «Движение материальной точки в неинерциальных системах отсчета», «Основы релятивистской механики», «Кинематика и динамика твердого тела» «Основы механики деформируемых сред», «Основы гидромеханики и аэромеханики», «Механические колебания и волны».',
          'courses': [
            {
              'id': 1,
              'logo': '',
              'background': '#ec407a',
              'name': 'Кинематика и динамика простейших систем',
              'description': '20 видео уроков',
              'lessons': [
                {id: 1, name: 'Закон сохранения импульса'},
                {id: 2, name: 'Пространство и время в теории относительности'},
                {id: 3, name: 'Пространство и время в теории относительности'},
              ],
              'price': '800'
            },
            {
              'id': 2,
              'logo': '',
              'background': '#ec407a',
              'name': 'Законы сохранения в простейших системах',
              'description': '21 видео уроков',
              'lessons': [
                {id: 1, name: 'Закон сохранения импульса'},
                {id: 2, name: 'Пространство и время в теории относительности'},
                {id: 3, name: 'Пространство и время в теории относительности'},
              ],
              'price': '900'
            },
            {
              'id': 3,
              'logo': '',
              'background': '#29b6f6',
              'name': 'Неинерциальные системы отсчета',
              'description': '22 видео уроков',
              'lessons': [
                {id: 1, name: 'Закон сохранения импульса'},
                {id: 2, name: 'Пространство и время в теории относительности'},
                {id: 3, name: 'Пространство и время в теории относительности'},
              ],
              'price': '1000'
            }
          ]
        };
        resolve(result);
      } else {
        resolve(this.coursesCurrent);
      }
    });
  }

}
