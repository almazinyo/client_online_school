import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class AuthService {

  constructor(private httpService: HttpService) {
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
      this.httpService.prepareQuery('api/main/init/',cookie)
        .then((result: InterFaceWork) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении информации об клиенте', error);
            reject();
          }
        );
    });
  }
}
