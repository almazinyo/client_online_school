import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth.service';
import {MenuService} from '../menu/menu.service';
import {GlobalParamsMessage} from '../message_alert/global-params-message';
import {Router} from '@angular/router';
import {ReviewsService} from '../reviews/reviews.service';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-client',
  templateUrl: './auth.component.html',
})

export class AuthComponent implements OnInit {
  output: any;
  fragment = '';
  data: InterFaceMain[] = [];
  menu: InterFaceMenu[] = [];
  reviews: InterFaceReviews[] = [];

  constructor(private authService: AuthService,
              private globalParamsMessage: GlobalParamsMessage,
              private router: Router,
              private http: HttpClient,
              private reviewsService: ReviewsService,
              private menuService: MenuService,
              private cookieService: CookieService) {

    if (this.router.url !== '/' && this.router.url !== '') {
      this.cookieService.set('vk_app_7200615',  this.router.url);
    }

    this.authService.getData().then((data: { mainSection: InterFaceMain[] }) => {
        this.data = data.mainSection;
      },
      (error) => {
        console.log('Ошибка при получении информации на гавный экран: ', error);
      });

    this.reviewsService.getReviews().then((datas: InterFaceReviews[]) => {
        this.reviews = datas;
      },
      (error) => {
        console.log('Ошибка при получении информации по отзывам: ', error);
      });
  }

  ngOnInit() {
    this.menu = this.menuService.menu;
    this.menuService.getMenuCheck.subscribe(item => {
      this.menu = this.menuService.menu;
    });
  }

  // переход на ссылку
  getSection(currentMenu) {
    if (currentMenu.is_status !== '2') {
      this.router.navigate(['/section/' + currentMenu.slug]);
    }
  }
}
