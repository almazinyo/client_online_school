import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class MenuService {
  menu = [];

  constructor(private httpService: HttpService) {
  }

  // получение списка активных полей
  public getMenu() {
    return new Promise((resolve, reject) => {
      if (this.menu.length === 0) {
        this.httpService.prepareQuery('api/main/menu', {})
          .then((result: any) => {
              this.menu = result;
              resolve(result);
            },
            (error) => {
              console.log('Ошибка при получении списка разделов предмета', error);
              reject();
            }
          );
        /* const result = [
           {name: 'Физика', link: 'physics', logo: '---icon-menu-map'},
           {name: 'Математика', link: 'maths', logo: '---icon-menu-physics'},
           {name: 'Химия', link: 'chemistry', logo: '---icon-menu-russian'},
         ];

         resolve(result);*/
      } else {
        resolve(this.menu);
      }
    });
  }

}
