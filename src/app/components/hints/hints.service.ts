import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class HintsService {
  hints: InterFaceHints[] = [];

  constructor(private httpService: HttpService) {
  }

  getHints() {
    return new Promise((resolve, reject) => {
      if (this.hints.length === 0) {
        this.httpService.prepareQuery('api/main/hints/')
          .then((result: { hints: InterFaceHints[] }) => {
              this.hints = result.hints;
              resolve(this.hints);
            },
            (error) => {
              console.log('Ошибка при получении подсказок', error);
              reject();
            }
          );
      } else {
        resolve(this.hints);
      }
    });
  }
}
