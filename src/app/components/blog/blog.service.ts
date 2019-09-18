import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class BlogService {
  blogs = [];

  constructor(private httpService: HttpService) {
  }

  // получение блога
  public getReviews() {

    return new Promise((resolve, reject) => {

      this.httpService.prepareQuery('api/blog', {})
        .then((result: any) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении списка разделов блогов', error);
            reject();
          }
        );
      /*const result = [
        {
          id: 1,
          title: 'Сверхпроводимость муаровой сверхрешетки из графена оказалась настраиваемой',
          date: '14 октября 2019',
          course: 'Физика',
          img: '2.jpg'
        },
        {
          id: 2,
          title: 'Сверхпроводимость муаровой сверхрешетки из графена оказалась настраиваемой',
          date: '15 октября 2019',
          course: 'Математика',
          img: '2.jpg'
        },
        {
          id: 3,
          title: 'Сверхпроводимость муаровой сверхрешетки из графена оказалась настраиваемой',
          date: '16 октября 2019',
          course: 'Химия',
          img: '2.jpg'
        }
      ];
      resolve(result);*/
    });
  }

}
