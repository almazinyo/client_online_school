import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class TeacherService {
  teachers = [];

  constructor(private httpService: HttpService) {
  }

  // получение Teacher
  public getTeachers() {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/subjects/teachers', {})
        .then((result: any) => {
            console.log(result);
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении списка разделов Teacher', error);
            reject();
          }
        );
    });
  }

  // получение детальной информации о Teacher
  public getTeacherDetails(slug) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/subjects/teachers' + slug)
        .then((result: any) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении детальной информации о Teacher', error);
            reject();
          }
        );
    });
  }
}
