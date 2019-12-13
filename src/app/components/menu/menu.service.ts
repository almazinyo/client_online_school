import {EventEmitter, Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class MenuService {
  getMenuCheck: EventEmitter<any> = new EventEmitter(false);
  menu = [];

  constructor(private httpService: HttpService) {
  }

  // получение списка активных полей
  public getMenu() {
    return new Promise((resolve, reject) => {
      if (this.menu.length === 0) {
        this.httpService.prepareQuery('api/subjects/menu', {})
          .then((result: any) => {
              this.menu = result;
              this.getMenuCheck.emit(true);
              resolve(result);
            },
            (error) => {
              console.log('Ошибка при получении списка разделов предмета', error);
              reject();
            }
          );
      } else {
        this.getMenuCheck.emit(true);
        resolve(this.menu);
      }
    });
  }

}
