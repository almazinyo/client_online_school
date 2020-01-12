import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class ProfileBuyService {
  profileBuy = [];

  constructor(private httpService: HttpService) {
  }

  getBuyList() {
    return new Promise((resolve, reject) => {
      if (this.profileBuy.length === 0) {
        this.httpService.prepareQuery('api/users/profile-buy', '', true)
          .then((result: InterFaceProfileDetails) => {

              resolve(result);
            },
            (error) => {
              console.log('Ошибка при получении детальной информации по платежам', error);
              reject();
            }
          );
      } else {
        resolve(this.profileBuy);
      }
    });
  }
}
