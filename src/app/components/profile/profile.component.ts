import {Component} from '@angular/core';
import {ProfileService} from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})

export class ProfileComponent {

  constructor(private profileService: ProfileService) {
  }

}
