import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class ProfilePromotionService {

  constructor(private httpService: HttpService) {
  }

  // получение информации по продвижению
  getPromotion() {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/users/passing-lessons', {}, true)
        .then((result: InterFaceProfilePromotion[]) => {

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
