import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class ProfilePromotionalCodeService {

  constructor(private httpService: HttpService) {
  }

  // получение информации по промокоду
  getPromotionCode() {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/users/promo-code', {}, true)
        .then((result) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении информации о продвижении', error);
            reject();
          }
        );
    });
  }
}
