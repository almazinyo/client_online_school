import {Component} from '@angular/core';
import {BlogDetailsService} from './blogDetails.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blogDetails.component.html',
})
export class BlogDetailsComponent {
  blog: InterFaceBlogDetails = {
    img: '',
    author: '',
    title: '',
    date: '',
    course: '',
    text: '',
  };

  constructor(private blogService: BlogDetailsService) {
    this.blogService.getReviews().then((data: InterFaceBlogDetails) => {
        this.blog = data;
      },
      (error) => {
        console.log('Ошибка при получении детальной информации по блогу: ', error);
      });
  }
}
