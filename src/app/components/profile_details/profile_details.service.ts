import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';
import {SessionStorageService} from '../../storage/session-storage.service';

@Injectable()
export class ProfileDetailsService {

  constructor(private httpService: HttpService,
              private sessionStorage: SessionStorageService) {
  }

  // получение информации по профилю
  getProfileDetails() {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/users/current-user', {}, true)
        .then((result: InterFaceProfileDetails) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении детальной информации по профилю', error);
            reject();
          }
        );
    });
  }

  save(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/users/save-profile-details', {data: data}, true)
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
