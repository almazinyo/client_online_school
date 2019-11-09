import {Component} from '@angular/core';
import {FooterService} from './footer.service';
import {Router} from '@angular/router';
import {BreadcrumbsService} from '../breadcrumbs/breadcrumbs.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  socialLinks: any; // @todo сделать интерфейс как у footers

  footers: InterFaceFooter[] = [];

  constructor(private footerService: FooterService,
              private router: Router,
              private breadcrumbsService: BreadcrumbsService) {


    this.breadcrumbsService.title = 'Footer';

    this.footerService.getFooters().then((data: InterFaceFooter[]) => {
        this.footers = data;
      },
      (error) => {
        console.log('Ошибка при получении информации по Footer: ', error);
      });


    this.socialLinks = [
      {
        name: 'Facebook',
        images: 'assets/imgs/icons/social/facebook.svg',
        link: 'https://www.facebook.com/',
        subscribe: '12К подписчиков',
      },
      {
        name: 'Telegram',
        images: 'assets/imgs/icons/social/telegram.svg',
        link: 'https://web.telegram.org/#/login',
        subscribe: '12К подписчиков',
      },
      {
        name: 'Вконтакте',
        images: 'assets/imgs/icons/social/vk.svg',
        link: 'https://vk.com/',
        subscribe: '12К подписчиков',
      },
      {
        name: 'Instagram',
        images: 'assets/imgs/icons/social/instagram.svg',
        link: 'https://www.instagram.com/',
        subscribe: '12К подписчиков',
      },
      {
        name: 'Youtube',
        images: 'assets/imgs/icons/social/youtube.svg',
        link: 'https://www.youtube.com/',
        subscribe: '12К подписчиков',
      },
    ];


  }

  getFooter(slug) {
    this.router.navigate(['footer/' + slug]);
  }
}
