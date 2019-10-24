import {Component} from '@angular/core';
import {CallbackService} from './callback.service';
import {GlobalParamsMessage} from '../message_alert/global-params-message';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
})
export class CallbackComponent {
  checkCondition: false;
  data = {
    email: '',
    tel: '',
    text: '',
  };

  constructor(private callbackService: CallbackService,
              private globalParamsMessage: GlobalParamsMessage) {
  }

  sendCallback() {
    if (this.data.email === '') {
      this.globalParamsMessage.data = {type: 'error', title: 'Необходимо указать email', body: ''};
      return false;
    }

    if (this.data.tel === '') {
      this.globalParamsMessage.data = {type: 'error', title: 'Необходимо указать телефон', body: ''};
      return false;
    }

    if (!this.data.text) {
      this.globalParamsMessage.data = {type: 'error', title: 'Необходимо указать текст', body: ''};
      return false;
    }

    if (!this.checkCondition) {
      this.globalParamsMessage.data = {type: 'error', title: 'Необходимо принять условия', body: ''};
      return false;
    }

    this.callbackService.addCallback(this.data).then(() => {
        this.globalParamsMessage.data = {type: 'success', title: 'Сообщение успешно отправлено', body: ''};
      },
      (error) => {
        console.log('Ошибка при получении информации по покупкам: ', error);
      });
  }
}
