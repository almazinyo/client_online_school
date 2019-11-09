import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class FooterService {
  constructor(private httpService: HttpService) { }
  // получение нижний колонтитул
  public getFooters() {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/subjects/menu', {})
        .then((result: any) => {
            console.log(result);
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении списка разделов нижний колонтитул ', error);
            reject();
          }
        );
    });
  }

  // получение детальной информации о нижний колонтитул
  public getFooterDetails(slug) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/main/options' + slug)
        .then((result: any) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении детальной информации о нижний колонтитул ', error);
            reject();
          }
        );
    });
  }
}
