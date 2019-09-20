import {Component} from '@angular/core';
import {ProfilePromotionService} from './profile_promotion.service';

@Component({
  selector: 'app-profile-promotion',
  templateUrl: './profile_promotion.component.html',
})
export class ProfilePromotionComponent {
  lessons: InterFaceProfilePromotion[] = [];
  sections: any = [];

  constructor(private profilePromotionService: ProfilePromotionService) {
    this.profilePromotionService.getPromotion().then((data: InterFaceProfilePromotion[]) => {
        this.lessons = data;
        this.sections = this.lessons[0].section;
      },
      (error) => {
        console.log('Ошибка при получении информации о продвижении: ', error);
      });
  }


  changeLessons(data) {
    this.sections = data.section;
  }
}
