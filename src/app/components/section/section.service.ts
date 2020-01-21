import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class SectionService {
  sectionsCurrent = [];

  constructor(private httpService: HttpService) {
  }

  // получение списка активных полей
  public getSection(slug) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/subjects/details/' + slug)
        .then((result: any) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении списка разделов предмета', error);
            reject();
          }
        );

      // const result = {[
      //     'label': 'Механика',
  //         'background': '#ff8a65',
      //     'sections': [
      //       {
      //         'section_name': 'Кинематика',
      //         'slug': '2',
      //         'lessons': [
      //           {
      //             'id': 1,
      //             'slug': 'kinematika',
      //             'lesson_name': 'Урок 1'
      //           },
      //           {
      //             'id': 2,
      //             'slug': '2',
      //             'lesson_name': 'Урок 2'
      //           },
      //           {
      //             'id': 3,
      //             'slug': '3',
      //             'lesson_name': 'Урок 3'
      //           }
      //         ]
      //       },
      //       {
      //         'section_name': 'Динамика',
      //         'slug': 'dinamika',
      //         'lessons': [
      //           {
      //             'id': 1,
      //             'slug': '1',
      //             'lesson_name': 'Урок 1'
      //           },
      //           {
      //             'id': 2,
      //             'slug': '2',
      //             'lesson_name': 'Урок 2'
      //           },
      //           {
      //             'id': 3,
      //             'slug': '3',
      //             'lesson_name': 'Урок 3'
      //           }
      //         ]
      //       }
      //     ]
      //   ],
      //    [
      //     'label': 'Термодинамика',
  //         'background': '#ff8a65',
      //     'sections': [
      //       {
      //         'section_name': 'МКТ',
      //         'slug': '2',
      //         'lessons': [
      //           {
      //             'id': 1,
      //             'slug': 'mkt',
      //             'lesson_name': 'Урок 1'
      //           },
      //           {
      //             'id': 2,
      //             'slug': '2',
      //             'lesson_name': 'Урок 2'
      //           },
      //           {
      //             'id': 3,
      //             'slug': '3',
      //             'lesson_name': 'Урок 3'
      //           }
      //         ]
      //       },
      //       {
      //         'section_name': 'Термодинамика',
      //         'slug': 'termodinamika-3',
      //         'lessons': [
      //           {
      //             'id': 1,
      //             'slug': '1',
      //             'lesson_name': 'Урок 1'
      //           },
      //           {
      //             'id': 2,
      //             'slug': '2',
      //             'lesson_name': 'Урок 2'
      //           },
      //           {
      //             'id': 3,
      //             'slug': '3',
      //             'lesson_name': 'Урок 3'
      //           }
      //         ]
      //       }
      //     ]
      //   ]},
    });
  }

}
