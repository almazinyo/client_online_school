import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class BlogService {
  blogs = [];

  constructor(private httpService: HttpService) {
  }

  // получение блога
  public getReviews() {

    return new Promise((resolve, reject) => {

      this.httpService.prepareQuery('api/blog', {})
        .then((result: any) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении списка разделов блогов', error);
            reject();
          }
        );
    });
  }

  // получение детальной информации о блоге
  public getReviewsDetails(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/blog-details', data)
        .then((result: any) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении детальной информации о блоге', error);
            reject();
          }
        );
    });
  }
}
