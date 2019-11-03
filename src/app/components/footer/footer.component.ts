import {Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  socialLinks: any;

  constructor() {
    this.socialLinks = [
      {
        name: "Facebook",
        images: "assets/imgs/icons/social/facebook.svg",
        link: "https://www.facebook.com/",
        subscribe: "12К подписчиков",
      },
      {
        name: "Telegram",
        images: "assets/imgs/icons/social/telegram.svg",
        link: "https://web.telegram.org/#/login",
        subscribe: "12К подписчиков",
      },
      {
        name: "Вконтакте",
        images: "assets/imgs/icons/social/vk.svg",
        link: "https://vk.com/",
        subscribe: "12К подписчиков",
      },
      {
        name: "Instagram",
        images: "assets/imgs/icons/social/instagram.svg",
        link: "https://www.instagram.com/",
        subscribe: "12К подписчиков",
      },
      {
        name: "Youtube",
        images: "assets/imgs/icons/social/youtube.svg",
        link: "https://www.youtube.com/",
        subscribe: "12К подписчиков",
      },
    ]

  }

}
