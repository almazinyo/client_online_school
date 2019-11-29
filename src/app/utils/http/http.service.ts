import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/internal/operators';
import {GlobalParamsMessage} from '../../components/message_alert/global-params-message';
import {Base64} from 'js-base64';

@Injectable()
export class HttpService {
  static handlerError(error: any = {}) {
    console.log('Ошибка после http-запроса', error);

    let text_error: string;
    if (typeof error.status !== 'undefined') {
      if (error.status === 0) {
        text_error = 'Неизвестная ошибка';
      } else if (error.status === 200) {
        text_error = error.body.json();
      } else if (error.status === 404) {
        text_error = 'Страница не найдена';
      } else if (error.status === 500) {
        text_error = 'временно не доступен';
        throw {name: 'CRM', message: 'CRM временно не доступен'};
      } else {
        text_error = '';
      }
    } else {
      text_error = '';
    }

    return Observable.throw(text_error);
  }

  constructor(private http: HttpClient,
              private  globalParamsMessage: GlobalParamsMessage) {
  }

  public prepareQuery(url: string = 'noUrl', data = {}, post = false) {
    if (data !== '' && post) {
      console.log('Отправляем данные: ', data);
      data = JSON.stringify(data);
      data = Base64.encode(data);
    }

    return new Promise((resolve, reject) => {

      this.sendPostQuery(url, data, post).subscribe((result: { status: number, msg: string, session_id: string, data: string, code: string }) => {
          console.log('HttpService Ответ получен: ', result);
          if (result.status === 200) {
            if (typeof result.data !== 'undefined') {
              /*let rez = atob(result.data);
              rez = JSON.parse(rez);
              console.log('Результат ответа: ', rez);*/
              resolve(result.data);
            } else {
              resolve(result);
            }
          } else if (result.status !== 200) {
            if (typeof result.code !== 'undefined' && result.code === 'NEED SESSION') {
              this.globalParamsMessage.data = {title: 'Ошибка', body: 'Истек срок сессии', type: 'error'};
            } else {
              this.globalParamsMessage.data = {title: 'Ошибка', body: result.msg, type: 'error'};
            }
            reject();
          } else {
            this.globalParamsMessage.data = {title: 'Ошибка', body: 'Система врменно недостпуна', type: 'error'};
            reject();
          }
        },
        (error) => {
          console.log('Ошибка после отправки запроса в CRM', error);
          this.globalParamsMessage.data = {title: 'Ошибка', body: 'Система врменно недостпуна', type: 'error'};
          reject(error);
        });
    });
  }

  private sendPostQuery(api, data: any, post) {
    const request = {
      data: data
    };
    const headers = new HttpHeaders();

    if (post) {
      headers.append('Content-Type', 'application/json');
      //
      // // return this.http.post('http://localhost:8005/' + api + '?' + request, {headers: headers})
      // return this.http.post('http://api.examator.ru/' + api, JSON.stringify(data), {headers: headers})
      //   .pipe(
      //     catchError(HttpService.handlerError)
      //   );


      return this.http.post('http://api.examator.ru/' + api, request, {headers: headers})
        .pipe(
          catchError(HttpService.handlerError)
        );
    }

    // return this.http.get('http://localhost:8005/' + api, {headers: headers}).pipe(
    return this.http.get('http://api.examator.ru/' + api, {headers: headers}).pipe(
      catchError(HttpService.handlerError)
    );
  }
}
