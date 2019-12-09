import {Component} from '@angular/core';
import {ProfileDetailsService} from './profile_details.service';
import {GlobalParamsMessage} from '../message_alert/global-params-message';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile_details.component.html',
})
export class ProfileDetailsComponent {
  profile: InterFaceProfileDetails = {
    id: null,
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    date_birth: '',
    city: ''
  };

  constructor(private profileDetailsService: ProfileDetailsService,
              private globalParamsMessage: GlobalParamsMessage) {
    this.profileDetailsService.getProfileDetails().then((data: InterFaceProfileDetails) => {
        this.profile = data;
      },
      (error) => {
        console.log('Ошибка при получении детальной информации по профилю: ', error);
      });
  }

  // сохранение информации
  save() {
    if (this.profile.first_name === '') {
      this.globalParamsMessage.data = {title: 'Ошибка', body: 'Необходимо указать имя', type: 'error'};
      return false;
    }

    if (this.profile.last_name === '') {
      this.globalParamsMessage.data = {title: 'Ошибка', body: 'Необходимо указать фамилию', type: 'error'};
      return false;
    }

    if (this.profile.email !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.profile.email)) {
      this.globalParamsMessage.data = {title: 'Ошибка', body: 'Необходимо указать корректный email', type: 'error'};
      return false;
    }

    if (this.profile.phone.length !== 11) {
      this.globalParamsMessage.data = {title: 'Ошибка', body: 'Необходимо указать телефон', type: 'error'};
      return false;
    }

    this.profile.phone = this.profile.phone.replace(/[\),\(,\-,+,\s]/g, '');
    this.profileDetailsService.save(this.profile).then(() => {
        console.log('Данные успешно сохранены');
      },
      (error) => {
        console.log('Ошибка при сохранении детальной информации по профилю: ', error);
      });
  }
}
