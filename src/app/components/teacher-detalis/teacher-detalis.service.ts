import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class TeacherDetalisService {
  constructor(private httpService: HttpService) { }

    // получение детальной информации о учитель
  public getTeacherDetalis(slug) {
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
