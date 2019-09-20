import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class ProfileDetailsService {

  constructor(private httpService: HttpService) {
  }

  // получение информации по профилю
  getProfileDetails() {
    return new Promise((resolve, reject) => {

      const result = {
        name: 'Иван',
        firstName: 'Петров',
        email: 'admin@admin.ru',
        phone: '79173936213',
        date_birth: '2015-02-01',
        city: 'Москва'
      };

      resolve(result);

      /*this.httpService.prepareQuery('api/profile-details', {})
        .then((result: InterFaceProfileDetails) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении детальной информации по профилю', error);
            reject();
          }
        );*/
    });
  }

  save(data) {



    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/save-profile-details', {data: data})
        .then(() => {
            resolve();
          },
          (error) => {
            console.log('Ошибка при сохранении детальной информации по профилю', error);
            reject();
          }
        );
    });
  }
}
