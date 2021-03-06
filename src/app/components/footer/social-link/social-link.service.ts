import {Injectable} from '@angular/core';

@Injectable()
export class SocialLinkService {

  constructor() {
  }

  getSocialLink() {
    return new Promise((resolve) => {

      const socialLinks = [
          // {
          //   name: 'Facebook',
          //   images: 'assets/imgs/icons/social/facebook.svg',
          //   link: 'https://www.facebook.com/',
          //   subscribe: '12К подписчиков',
          // },
          // {
          //   name: 'Telegram',
          //   images: 'assets/imgs/icons/social/telegram.svg',
          //   link: 'https://web.telegram.org/#/login',
          //   subscribe: '12К подписчиков',
          // },
          {
            name: 'Вконтакте',
            images: 'assets/imgs/icons/social/vk.svg',
            link: 'https://vk.com/examator',
            subscribe: '12К подписчиков',
          },
          {
            name: 'Instagram',
            images: 'assets/imgs/icons/social/instagram.svg',
            link: 'https://www.instagram.com/_examator_',
            subscribe: '12К подписчиков',
          },
          {
            name: 'Youtube',
            images: 'assets/imgs/icons/social/youtube.svg',
            link: 'https://www.youtube.com/channel/UCAijbvp1w1TAtLRoHIpxXeA',
            subscribe: '12К подписчиков',
          },
        ];

      resolve(socialLinks);
    });
  }
}
