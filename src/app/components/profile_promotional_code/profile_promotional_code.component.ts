import {Component} from '@angular/core';
import {ProfilePromotionalCodeService} from './profile_promotional_code.service';

@Component({
  selector: 'app-profile-promotional-code',
  templateUrl: './profile_promotional_code.component.html',
})
export class ProfilePromotionalCodeComponent {
  promotionCode = '';

  constructor(private profilePromotionalCodeService: ProfilePromotionalCodeService) {
    this.profilePromotionalCodeService.getPromotionCode().then((data: any) => {
      console.log(1,data)
        this.promotionCode = data;
      },
      (error) => {
        console.log('Ошибка при получении промокода: ', error);
      });
  }
}
