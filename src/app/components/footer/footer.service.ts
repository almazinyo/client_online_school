import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class FooterService {
  footers = [];

  constructor(private httpService: HttpService) {
  }

  // получение блога
  public getFooters() {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/subjects/menu', {})
        .then((result: any) => {
            console.log(result);
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении списка разделов меню ', error);
            reject();
          }
        );
    });
  }

  // получение детальной информации о блоге
  public getFooterDetails(slug) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/main/options' + slug)
        .then((result: any) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении детальной информации о меню ', error);
            reject();
          }
        );
    });
  }
}
