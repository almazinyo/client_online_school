import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class ReviewsService {
  reviews = [];

  constructor(private httpService: HttpService) {
  }

  // получение списка активных полей
  public getReviews() {

    return new Promise((resolve, reject) => {

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
      const result = [
        {
          id: 1,
          author: 'Александр Баль',
          course: 'Курс математики',
          assessment: '5',
          text: 'Курс отличный - ничего лишнего - методички совпадают с излагаемым материалом - преподаватель старается разжевать на первый взгляд непростые темы, очень все достойно, - наконец то ушли от клик митинга - зум рулит.'
        },
        {
          id: 2,
          author: 'Петров Саша',
          course: 'Курс физики',
          assessment: '4',
          text: 'Нормальный курс'
        },
        {
          id: 3,
          author: 'Евгения',
          course: 'Курс химии',
          assessment: '5',
          text: 'Круто'
        }
      ];
      resolve(result);
    });
  }

}
