import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class CallbackService {
  constructor(private httpService: HttpService) {
  }

  // обратная связь
  public addCallback(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/users/contact', data, true)
        .then((result: any) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при отправке сообщения по обратной связи', error);
            reject();
          }
        );
    });
  }
}
