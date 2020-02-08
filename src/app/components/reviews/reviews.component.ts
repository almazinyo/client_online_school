import {Component} from '@angular/core';
import {ReviewsService} from './reviews.service';
import {BreadcrumbsService} from '../breadcrumbs/breadcrumbs.service';
import {MenuService} from '../menu/menu.service';
import {GlobalParamsMessage} from '../message_alert/global-params-message';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
})
export class ReviewsComponent {
  reviews: InterFaceReviews[] = [];
  newReviews = {
    show: false,
    description: '',
    rating: 0,
    predmet: {slug: ''}
  };
  menu: InterFaceMenu[] = [];

  constructor(private reviewsService: ReviewsService,
              private menuService: MenuService,
              private globalParamsMessage: GlobalParamsMessage,
              private breadcrumbsService: BreadcrumbsService) {
    this.breadcrumbsService.title = 'Отзывы';

    this.menu = this.menuService.menu;
    this.menuService.getMenuCheck.subscribe(item => {
      this.menu = this.menuService.menu;
    });

    this.start();
  }

  start() {
    this.reviewsService.getReviews().then((data: InterFaceReviews[]) => {
        this.reviews = data;
      },
      (error) => {
        console.log('Ошибка при получении информации по отзывам: ', error);
      });
  }

  createReviews() {
    if (this.newReviews.rating === 0) {
      this.globalParamsMessage.data = {type: 'error', title: 'Необходимо указать рейтинг', body: ''};
      return false;
    }

    if (this.newReviews.description === '') {
      this.globalParamsMessage.data = {type: 'error', title: 'Необходимо указать описание', body: ''};
      return false;
    }

    if (this.newReviews.predmet.slug === '') {
      this.globalParamsMessage.data = {type: 'error', title: 'Необходимо указать предмет', body: ''};
      return false;
    }

    this.reviewsService.newReviews({
      rating: this.newReviews.rating,
      description: this.newReviews.description,
      slug: this.newReviews.predmet.slug,
    }).then(() => {
        this.newReviews = {
          show: false,
          description: '',
          rating: 0,
          predmet: {slug: ''}
        };
        this.start();
      },
      (error) => {
        console.log('Ошибка при добавлении отзыва: ', error);
      });
  }
}
