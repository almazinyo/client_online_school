import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';
import {SessionStorageService} from '../../storage/session-storage.service';
import {GlobalParamsUser} from '../../storage/global-params-user';
import {CookieService} from 'ngx-cookie-service';

@Injectable()
export class AuthService {

  constructor(private httpService: HttpService,
              private sessionStorage: SessionStorageService,
              private cookieService: CookieService,
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
      this.httpService.prepareQuery('api/users/logout', '', true)
        .then((result: InterFaceWork) => {
            this.sessionStorage.exit();
            delete this.sessionStorage;
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
  public getInit() {
    return new Promise((resolve, reject) => {

      const cookie = this.cookieService.get('vk_app_7200615') || '';

      if (cookie !== '') {
        this.httpService.prepareQuery('api/main/init/', {data: cookie}, true)
          .then((result: { token: string, username: string }) => {


              if (typeof result.token !== 'undefined') {
                this.sessionStorage.authenticated.emit(true);
                this.globalParamsUser.fio = result.username;
                this.sessionStorage.tokenId = result.token;
              } else {
                this.sessionStorage.authenticated.emit(false);
              }

              resolve(result);
            },
            (error) => {
              console.log('Ошибка при получении информации о клиенте 2', error);
              reject();
            }
          );
      } else {
        this.sessionStorage.authenticated.emit(false);
        reject();
      }
    });
  }
}
