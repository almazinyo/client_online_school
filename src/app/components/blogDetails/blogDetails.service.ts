import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class BlogDetailsService {
  blogCurrent = [];

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
      const result = {
        title: 'Глобальное потепление «подарило» человечеству опасный грибок и сделает его еще смертоноснее',
        img: '2.jpg',
        author: 'Светлана Ястребова',
        date: '17 апреля 2019',
        text: 'Один из самых опасных для человека грибов, Candida auris, эволюционирует в сторону большей устойчивости к повышенным температурам, утверждают авторы исследования, опубликованного в журнале mBio. По словам ученых, это происходит из-за глобального потепления и может привести к тому, что главная природная защита человека против грибов — постоянно высокая температура тела — перестанет действовать. Вероятно, что Candida auris в принципе начал инфицировать людей из-за повышения температуры на планете, отмечают исследователи.'
      };
      resolve(result);
    });
  }

}
