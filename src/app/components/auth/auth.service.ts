import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';
import {SessionStorageService} from '../../storage/session-storage.service';
import {GlobalParamsUser} from '../../storage/global-params-user';

@Injectable()
export class AuthService {

  constructor(private httpService: HttpService,
              private sessionStorage: SessionStorageService,
              private globalParamsUser: GlobalParamsUser) {
  }

  // получение списка активных полей
  public getData() {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/main/options/')
        .then((result: InterFaceMain) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении информации на главный экран', error);
            reject();
          }
        );
    });
  }

  // выход
  public exit() {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/users/logout')
        .then((result: InterFaceWork) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при выходе', error);
            reject();
          }
        );
    });
  }

  // получение списка активных полей
  public getInit(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/main/init/', {data: data}, true)
        .then((result: { token: string, username: string }) => {
            this.sessionStorage.authenticated.emit(false);

            if (typeof result.token !== 'undefined') {
              this.globalParamsUser.fio = result.username;
              this.sessionStorage.tokenId = result.token;
            }

            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении информации о клиенте 2', error);
            reject();
          }
        );
    });
  }
}
