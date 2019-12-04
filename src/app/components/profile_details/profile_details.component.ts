import {Component} from '@angular/core';
import {ProfileDetailsService} from './profile_details.service';

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

  constructor(private profileDetailsService: ProfileDetailsService) {
    this.profileDetailsService.getProfileDetails().then((data: InterFaceProfileDetails) => {
        this.profile = data;
      },
      (error) => {
        console.log('Ошибка при получении детальной информации по профилю: ', error);
      });
  }

  // сохранение информации
  save() {
    this.profile.phone = this.profile.phone.replace(/[\),\(,\-,+,\s]/g, '');
    this.profileDetailsService.save(this.profile).then(() => {
        console.log('Данные успешно сохранены');
      },
      (error) => {
        console.log('Ошибка при сохранении детальной информации по профилю: ', error);
      });
  }
}
