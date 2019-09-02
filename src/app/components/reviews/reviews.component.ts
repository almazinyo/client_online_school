import {Component} from '@angular/core';
import {ReviewsService} from './reviews.service';
import {BreadcrumbsService} from '../breadcrumbs/breadcrumbs.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
})
export class ReviewsComponent {
  reviews: InterFaceReviews[] = [];

  constructor(private reviewsService: ReviewsService,
              private breadcrumbsService: BreadcrumbsService) {
    this.breadcrumbsService.title = 'Отзывы';
    this.reviewsService.getReviews().then((data: InterFaceReviews[]) => {
        this.reviews = data;
      },
      (error) => {
        console.log('Ошибка при получении информации по отзывам: ', error);
      });

  }
}
