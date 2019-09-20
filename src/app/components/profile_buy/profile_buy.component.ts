import {Component} from '@angular/core';
import {ProfileBuyService} from './profile_buy.service';

@Component({
  selector: 'app-profile-buy',
  templateUrl: './profile_buy.component.html',
})
export class ProfileBuyComponent {
  buyList: InterFaceProfileBuy[] = [];

  constructor(private profileBuyService: ProfileBuyService) {
    this.profileBuyService.getBuyList().then((data: InterFaceProfileBuy[]) => {
        this.buyList = data;
      },
      (error) => {
        console.log('Ошибка при получении информации по покупкам: ', error);
      });
  }
}
