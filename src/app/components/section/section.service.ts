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
      if (this.sectionsCurrent.length === 0) {
        this.httpService.prepareQuery('api/subjects/details/' + slug)
          .then((result: any) => {
              this.sectionsCurrent = result;
              resolve(result);
            },
            (error) => {
              console.log('Ошибка при получении списка разделов предмета', error);
              reject();
            }
          );

        // const result = {
        //   'sections': {
        //     'label': 'физике',
        //     'sections': [
        //       {
        //         'section_id': '1',
        //         'slug': '1',
        //         'background': '#ff8a65',
        //         'description': '6 видео курсов',
        //         'section_name': 'Механика',
        //         'lessons': [
        //           {
        //             'id': 1,
        //             'slug': '1',
        //             'lesson_name': 'Кинематика и динамика простейших систем'
        //           },
        //           {
        //             'id': 2,
        //             'slug': '2',
        //             'lesson_name': 'Законы сохранения в простейших системах'
        //           },
        //           {
        //             'id': 3,
        //             'slug': '3',
        //             'lesson_name': 'Неинерциальные системы отсчета'
        //           }
        //         ]
        //       },
        //       {
        //         'section_id': '2',
        //         'slug': '2',
        //         'background': '#29b6f6',
        //         'description': '5 видео курсов',
        //         'section_name': 'Электродинамика',
        //         'lessons': [
        //           {
        //             'id': 1,
        //             'slug': '2',
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
        //   },
        //   'tests': {
        //     'label': 'физике',
        //     'tests': [
        //       {
        //         'section_id': '1',
        //         'slug': '2',
        //         'background': '#ff8a65',
        //         'description': '6 видео курсов',
        //         'section_name': 'Механика',
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
        //       },
        //       {
        //         'section_id': '2',
        //         'slug': '2',
        //         'background': '#29b6f6',
        //         'description': '5 видео курсов',
        //         'section_name': 'Электродинамика',
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
        //   },
        // };
        // resolve(result);
      } else {
        resolve(this.sectionsCurrent);
      }
    });
  }

}
