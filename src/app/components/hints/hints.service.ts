import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class HintsService {
  hints: InterFaceHints[] = [
    {
      id: 1,
      title: 'Дарим подарки!',
      desc: 'В преддверии волшебного праздника мы подготовили для тебя игру. На сайте и в приложении спрятано 10 символов Нового года. Найди их, чтобы получить уникальные промокоды и купить подарки еще выгоднее. Среди счастливчиков, которые нашли все 10 предметов, мы разыграем 10000₽ на шопинг в KazanExpress.',
      img: 'https://hb.bizmrg.com/kazanexpress/static/PopUp.png'
    },
    {
      id: 1,
      title: '2222Дарим подарки!',
      desc: '2222В преддверии волшебного праздника мы подготовили для тебя игру. На сайте и в приложении спрятано 10 символов Нового года. Найди их, чтобы получить уникальные промокоды и купить подарки еще выгоднее. Среди счастливчиков, которые нашли все 10 предметов, мы разыграем 10000₽ на шопинг в KazanExpress.',
      img: 'https://hb.bizmrg.com/kazanexpress/static/PopUp.png'
    }
  ];

  constructor(private httpService: HttpService) {
  }

  getHints() {
    return new Promise((resolve, reject) => {
      if (this.hints.length === 0) {
        this.httpService.prepareQuery('api/main/hints/')
          .then((result: InterFaceHints[]) => {
              this.hints = result;
              resolve(result);
            },
            (error) => {
              console.log('Ошибка при получении детальной информации о блоге', error);
              reject();
            }
          );
      } else {
        resolve(this.hints);
      }
    });
  }
}
