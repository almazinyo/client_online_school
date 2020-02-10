import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class WorkService {
  currentWork = '';
  work = {};
  coursesCurrent: any;

  constructor(private httpService: HttpService) {
  }

  get pubId(): string {
    return this.currentWork;
  }

  set pubId(value: string) {
    this.currentWork = value;
  }

  public sendAnswer(data) {
    return new Promise((resolve, reject) => {

      this.httpService.prepareQuery('api/subjects/check-test', data, true)
        .then((result) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при отправке тестов', error);
            reject();
          }
        );
    });
  }

  // получение списка активных полей
  public getWork(slugSection, slugLesson) {

    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/sections/details/' + slugSection + '/' + slugLesson)
        .then((result: InterFaceWork) => {
            this.coursesCurrent = result;
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении информации по урокам', error);
            // this.coursesCurrent = [];
            reject();
          }
        );
    });
  }
}
