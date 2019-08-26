import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class SectionService {
  sectionCurrent = '';
  sectionsCurrent = '';

  constructor(private httpService: HttpService) {
  }

  get pubId(): string {
    return this.sectionCurrent;
  }

  set pubId(value: string) {
    this.sectionCurrent = value;
  }

  // получение списка активных полей
  public getSection() {
    const data = {param: this.sectionCurrent};
    return new Promise((resolve, reject) => {
      if (this.sectionsCurrent.length === 0) {
        this.httpService.prepareQuery('api/get-section', data)
          .then((result: any) => {
              this.sectionsCurrent = result;
              resolve(result);
            },
            (error) => {
              console.log('Ошибка при получении списка разделов предмета', error);
              reject();
            }
          );
      } else {
        resolve(this.sectionsCurrent);
      }
    });
  }

}
