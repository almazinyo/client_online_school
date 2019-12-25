import {EventEmitter, Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';
import {SessionStorageService} from '../../storage/session-storage.service';

@Injectable()
export class ProfileDetailsService {
  getDataUser: EventEmitter<any> = new EventEmitter(false);
  user: InterFaceProfileDetails = {
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    phone: null,
    image: '',
    date_birth: '',
    city: '',
  };

  constructor(private httpService: HttpService,
              private sessionStorage: SessionStorageService) {
  }

  // получение информации по профилю
  getProfileDetails() {
    return new Promise((resolve, reject) => {
      if (this.user.username === '') {
        const token = this.sessionStorage.tokenId;
        this.httpService.prepareQuery('api/users/current-user', {'token': token}, true)
          .then((result: InterFaceProfileDetails) => {
              this.user = result;
              this.getDataUser.emit(true);
              resolve(result);
            },
            (error) => {
              console.log('Ошибка при получении детальной информации по профилю', error);
              reject();
            }
          );
      } else {
        resolve(this.user);
      }
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
