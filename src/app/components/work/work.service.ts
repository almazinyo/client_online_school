import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class WorkService {
  currentWork = '';
  work = {};

  constructor(private httpService: HttpService) {
  }

  get pubId(): string {
    return this.currentWork;
  }

  set pubId(value: string) {
    this.currentWork = value;
  }

  // получение списка активных полей
  public getWork() {

    return new Promise((resolve, reject) => {

      /*this.httpService.prepareQuery('api/get-section', data)
        .then((result: any) => {
            this.coursesCurrent = result;
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении списка разделов предмета', error);
            reject();
          }
        );*/
      const result = {
          'title': 'Кинематика и динамика простейших систем',
          'description': 'Кинематика материальной точки и простейших систем',
          'text': 'Построение курса традиционно. Курс охватывает классический материал по курсу общей физики, раздел «Механика», читающийся на первом курсе физического факультета МГУ в первом семестре. В курсе будут представлены разделы «Кинематика и динамика материальной точки и простейших систем», «Законы сохранения», «Движение материальной точки в неинерциальных системах отсчета», «Основы релятивистской механики», «Кинематика и динамика твердого тела» «Основы механики деформируемых сред», «Основы гидромеханики и аэромеханики», «Механические колебания и волны».',
      };
      resolve(result);
    });
  }

}
