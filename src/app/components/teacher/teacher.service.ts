import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class TeacherService {
  constructor(private httpService: HttpService) { }

  // получение учитель
  public getTeachers() {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/subjects/teachers', {})
        .then((result: any) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении списка разделов учитель', error);
            reject();
          }
        );
    });
  }

  // получение детальной информации о учитель
  public getTeacherDetails(slug) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/subjects/teacher/' + slug)
        .then((result: any) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении детальной информации о учитель', error);
            reject();
          }
        );
    });
  }
}
