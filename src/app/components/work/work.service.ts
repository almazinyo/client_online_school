import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class WorkService {
  currentWork = '';
  work = {};

  constructor(private httpService: HttpService) {
  }

  get pubId(): string {
    return this.currentWork;
  }

  set pubId(value: string) {
    this.currentWork = value;
  }

  // получение списка активных полей
  public getWork(slug) {

    return new Promise((resolve, reject) => {

      /*this.httpService.prepareQuery('api/get-section'+slug)
        .then((result: InterFaceWork) => {
            this.coursesCurrent = result;
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении информации по урокам', error);
            reject();
          }
        );*/
      const result = {
        'id': 2,
        'title': 'Кинематика и динамика простейших систем',
        'description': 'Кинематика материальной точки и простейших систем',
        'work': [
          {'order': 1, type: 'pdf', url: ''},
          {'order': 3, type: 'img', url: 'https://s00.yaplakal.com/pics/pics_original/8/8/1/7094188.jpg'},
          {'order': 2, type: 'video', url: 'https://yadi.sk/i/nmMPoiOqquNtig'},
        ],
        'allWorks': [
          {id: 1, name: 'Урок 1', slug: 1, checked: '1'},
          {id: 2, name: 'Урок 2', slug: 1, checked: ''},
          {id: 3, name: 'Урок 3', slug: 1, checked: '0'}
        ]
      };
      resolve(result);
    });
  }

}
