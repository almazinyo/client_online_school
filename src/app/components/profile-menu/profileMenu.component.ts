import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ProfileDetailsService} from '../profile_details/profile_details.service';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profileMenu.component.html',
})

export class ProfileMenuComponent {
  user: InterFaceProfileDetails = {
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    phone: '',
    image: '',
    date_birth: '',
    city: '',
  };

  constructor(public router: Router,
              private profileDetailsService: ProfileDetailsService) {
    this.profileDetailsService.getProfileDetails().then((data: InterFaceProfileDetails) => {
        this.user = data;
      },
      (error) => {
        console.log('Ошибка при получении детальной информации по профилю: ', error);
      });
  }

}
