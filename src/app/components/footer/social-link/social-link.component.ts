import { Component, OnInit } from '@angular/core';
import {SocialLinkService} from './social-link.service';

@Component({
  selector: 'app-social-link',
  templateUrl: './social-link.component.html',
})
export class SocialLinkComponent  {
  socialData: InterFaceSocialLink[] = []

  constructor(private socialLinkService: SocialLinkService) {
    this.socialLinkService.getSocialLink().then((data: InterFaceSocialLink[]) => {
      this.socialData = data;
    },
    (error) => {
      console.log('Ошибка при получении информации о социальные данные: ', error);
    });
  }
}
