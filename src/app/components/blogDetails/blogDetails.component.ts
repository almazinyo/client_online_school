import {Component} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {BlogService} from '../blog/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blogDetails.component.html',
})
export class BlogDetailsComponent {
  blog: InterFaceBlogDetails = {
    id: null,
    img: '',
    author: '',
    title: '',
    date: '',
    course: '',
    text: '',
  };

  constructor(private blogService: BlogService,
              private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(
      (params: Params): void => {
        this.getReviewsDetails(params.id);
      }
    );
  }

  getReviewsDetails(slug) {
    this.blogService.getReviewsDetails(slug).then((data: InterFaceBlogDetails) => {
        this.blog = data[0];
      },
      (error) => {
        console.log('Ошибка при получении детальной информации по блогу: ', error);
      });
  }
}
