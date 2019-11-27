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
        .then((result: InterFaceWork) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении информации на главный экран', error);
            reject();
          }
        );
    });
  }

  // получение списка активных полей
  public getInit(cookie) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/main/init/', cookie, true)
        .then((result: { token: string, username: string }) => {

            if (typeof result.token !== 'undefined') {
              this.globalParamsUser.fio = result.username;
              this.sessionStorage.tokenId = result.token;
            } else {
              this.sessionStorage.authenticated.emit(false);
            }

            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении информации о клиенте', error);
            reject();
          }
        );
    });
  }
}
