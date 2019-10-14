import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class ProfileBuyService {

  constructor(private httpService: HttpService) {
  }

  getBuyList() {
    return new Promise((resolve, reject) => {

      const result = [
        {id: 1, name: 'Покупка 1', sum: '1000', date: '20.09.2019'},
        {id: 2, name: 'Покупка 2', sum: '1200', date: '21.05.2019'},
        {id: 3, name: 'Покупка 3', sum: '1500', date: '01.05.2019'},
        {id: 4, name: 'Покупка 4', sum: '1050', date: '01.16.2019'},
        {id: 5, name: 'Покупка 5', sum: '1006', date: '01.05.2019'},
        {id: 6, name: 'Покупка 6', sum: '500', date: '01.05.2019'},
        {id: 8, name: 'Покупка 7', sum: '320', date: '01.05.2019'},
      ];

      resolve(result);

      /*this.httpService.prepareQuery('api/profile-buy', {})
        .then((result: InterFaceProfileBuy[]) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении информации по покупкам', error);
            reject();
          }
        );*/
    });
  }
}
