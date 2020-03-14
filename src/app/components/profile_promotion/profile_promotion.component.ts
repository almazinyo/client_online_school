import {Component} from '@angular/core';
import {ProfilePromotionService} from './profile_promotion.service';

@Component({
  selector: 'app-profile-promotion',
  templateUrl: './profile_promotion.component.html',
})
export class ProfilePromotionComponent {
  lessons: InterFaceProfilePromotion[] = [];

  constructor(private profilePromotionService: ProfilePromotionService) {
    this.profilePromotionService.getPromotion().then((data: InterFaceProfilePromotion[]) => {
        this.lessons = data;

        console.log(1,this.lessons)

      },
      (error) => {
        console.log('Ошибка при получении информации о продвижении: ', error);
      });
  }
}
