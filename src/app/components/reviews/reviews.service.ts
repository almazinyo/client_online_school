import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class ReviewsService {
  reviews = [];

  constructor(private httpService: HttpService) {
  }

  // получение списка активных полей
  public getReviews() {
    return new Promise((resolve, reject) => {
      if (this.reviews.length === 0) {
        this.httpService.prepareQuery('api/reviews', '')
          .then((result: any) => {
              this.reviews = result;
              resolve(result);
            },
            (error) => {
              console.log('Ошибка при получении списка отзывов', error);
              reject();
            }
          );
      } else {
        resolve(this.reviews);
      }
    });
  }

  // добавление отзыва
  public newReviews(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/reviews/create', data, true)
        .then(() => {
            resolve();
          },
          (error) => {
            console.log('Ошибка при создании отзыва', error);
            reject();
          }
        );
    });
  }

}
