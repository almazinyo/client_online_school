import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class ProfilePointsService {

  constructor(private httpService: HttpService) {
  }

  getPoints() {
    return new Promise((resolve, reject) => {

      const result = {
        points: 3000,
        number: 1,
        nextLevel: '60 баллов до следующего уровня'
      };

      resolve(result);

      /*this.httpService.prepareQuery('api/profile-points', {})
        .then((result: InterFaceProfilePoints) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении информации по баллам', error);
            reject();
          }
        );*/
    });
  }
}
