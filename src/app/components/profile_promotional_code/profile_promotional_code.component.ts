import {Component} from '@angular/core';
import {ProfilePromotionalCodeService} from './profile_promotional_code.service';

@Component({
  selector: 'app-profile-promotional-code',
  templateUrl: './profile_promotional_code.component.html',
})
export class ProfilePromotionalCodeComponent {

  constructor(private profilePromotionalCodeService: ProfilePromotionalCodeService) {
  }
}
