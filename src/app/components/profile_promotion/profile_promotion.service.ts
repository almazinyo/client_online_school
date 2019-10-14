import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class ProfilePromotionService {

  constructor(private httpService: HttpService) {
  }

  // получение информации по продвижению
  getPromotion() {
    return new Promise((resolve, reject) => {

      const result = [{
        id: 1,
        name: 'Физика',
        section: [
          {
            id: 1,
            name: 'Кинематика',
            background: '#ec407a',
            img: 'course.svg',
            lessons: [
              {
                id: 1,
                name: 'Урок 1',
                img: 'lesson-success.svg'
              },
              {
                id: 2,
                name: 'Урок 2',
                img: 'lesson-success.svg'
              },
              {
                id: 9,
                name: 'Урок 9',
                img: 'lesson-success.svg'
              }
            ]
          },
          {
            id: 2,
            name: 'Динамика',
            background: '#eca532',
            img: 'course.svg',
            lessons: [
              {
                id: 3,
                name: 'Урок 3',
                img: 'lesson-success.svg'
              },
              {
                id: 4,
                name: 'Урок 4',
                img: 'lesson-success.svg'
              },
              {
                id: 10,
                name: 'Урок 10',
                img: 'lesson-success.svg'
              }
            ]
          }
        ]
      },
        {
          id: 2,
          name: 'Метаматика',
          section: [
            {
              id: 3,
              name: 'Алгебра',
              background: '#69ec44',
              img: 'course.svg',
              lessons: [
                {
                  id: 5,
                  name: 'Урок 5',
                  img: 'lesson-success.svg'
                },
                {
                  id: 6,
                  name: 'Урок 6',
                  img: 'lesson-success.svg'
                }
              ]
            },
            {
              id: 4,
              name: 'Геометрия',
              background: '#2829ec',
              img: 'course.svg',
              lessons: [
                {
                  id: 7,
                  name: 'Урок 7',
                  img: 'lesson-success.svg'
                },
                {
                  id: 8,
                  name: 'Урок 8',
                  img: 'lesson-success.svg'
                }
              ]
            }
          ]
        }];

      resolve(result);

      /*this.httpService.prepareQuery('api/promotion', {})
        .then((result: InterFaceProfilePromotion[]) => {

            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении информации о продвижении', error);
            reject();
          }
        );*/
    });
  }
}
