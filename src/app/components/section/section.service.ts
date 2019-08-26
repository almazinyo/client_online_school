import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class SectionService {
  sectionCurrent = '';
  sectionsCurrent = [];

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
        /*this.httpService.prepareQuery('api/get-section', data)
          .then((result: any) => {
              this.sectionsCurrent = result;
              resolve(result);
            },
            (error) => {
              console.log('Ошибка при получении списка разделов предмета', error);
              reject();
            }
          );*/
        const result = {
          'sections': {
            'label': 'физике',
            'sections': [
              {
                'section_id': '1',
                'background': '#ff8a65',
                'icon': 'course.svg',
                'description': '6 видео курсов',
                'section_name': 'Механика',
                'lessons': [
                  {
                    'lesson_id': 1,
                    'background': '#1f5af4',
                    'logo': 'lesson-success.svg',
                    'lesson_name': 'Урок 1'
                  },
                  {
                    'lesson_id': 2,
                    'background': '#1f5af4',
                    'logo': 'lesson-period.svg',
                    'lesson_name': 'Урок 2'
                  },
                  {
                    'lesson_id': 3,
                    'background': '#fff',
                    'logo': 'arrow-right.svg',
                    'lesson_name': 'Урок 3'
                  }
                ]
              },
              {
                'section_id': '2',
                'background': '#29b6f6',
                'icon': 'course.svg',
                'description': '5 видео курсов',
                'section_name': 'Электродинамика',
                'lessons': [
                  {
                    'lesson_id': 1,
                    'background': '#1f5af4',
                    'logo': 'arrow-right.svg',
                    'lesson_name': 'Урок 1'
                  },
                  {
                    'lesson_id': 2,
                    'background': '#fff',
                    'logo': 'lesson-success.svg',
                    'lesson_name': 'Урок 2'
                  },
                  {
                    'lesson_id': 3,
                    'background': '#1f5af4',
                    'logo': 'lesson-period.svg',
                    'lesson_name': 'Урок 3'
                  }
                ]
              }
            ]
          },
          'tests': {
            'label': 'физике',
            'tests': [
              {
                'section_id': '1',
                'background': '#ff8a65',
                'icon': 'course.svg',
                'description': '6 видео курсов',
                'section_name': 'Механика',
                'lessons': [
                  {
                    'lesson_id': 1,
                    'background': '#1f5af4',
                    'logo': 'lesson-success.svg',
                    'lesson_name': 'Урок 1'
                  },
                  {
                    'lesson_id': 2,
                    'background': '#1f5af4',
                    'logo': 'lesson-period.svg',
                    'lesson_name': 'Урок 2'
                  },
                  {
                    'lesson_id': 3,
                    'background': '#fff',
                    'logo': 'arrow-right.svg',
                    'lesson_name': 'Урок 3'
                  }
                ]
              },
              {
                'section_id': '2',
                'background': '#29b6f6',
                'icon': 'course.svg',
                'description': '5 видео курсов',
                'section_name': 'Электродинамика',
                'lessons': [
                  {
                    'lesson_id': 1,
                    'background': '#1f5af4',
                    'logo': 'arrow-right.svg',
                    'lesson_name': 'Урок 1'
                  },
                  {
                    'lesson_id': 2,
                    'background': '#fff',
                    'logo': 'lesson-success.svg',
                    'lesson_name': 'Урок 2'
                  },
                  {
                    'lesson_id': 3,
                    'background': '#1f5af4',
                    'logo': 'lesson-period.svg',
                    'lesson_name': 'Урок 3'
                  }
                ]
              }
            ]
          },
        };
        resolve(result);
      } else {
        resolve(this.sectionsCurrent);
      }
    });
  }

}
