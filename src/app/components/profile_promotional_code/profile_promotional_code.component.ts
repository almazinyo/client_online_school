import {Component} from '@angular/core';
import {ProfilePromotionalCodeService} from './profile_promotional_code.service';

@Component({
  selector: 'app-profile-promotional-code',
  templateUrl: './profile_promotional_code.component.html',
})
export class ProfilePromotionalCodeComponent {
  promotionCode = {
    percent: '',
    key: ''
  };
  showPCheck = false;

  constructor(private profilePromotionalCodeService: ProfilePromotionalCodeService) {
    this.profilePromotionalCodeService.getPromotionCode().then((data: any) => {
        this.promotionCode = data;
      },
      (error) => {
        console.log('Ошибка при получении промокода: ', error);
      });
  }

  showP() {
    this.showPCheck = true;

    setTimeout(() => this.showPCheck = false, 2000);
  }
}
