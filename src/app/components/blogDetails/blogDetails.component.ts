import {Component} from '@angular/core';
import {BlogDetailsService} from './blogDetails.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blogDetails.component.html',
})
export class BlogDetailsComponent {
  blog = [];

  constructor(private blogService: BlogDetailsService) {
    this.blogService.getReviews().then((data: any) => {
        this.blog = data;
      },
      (error) => {
        console.log('Ошибка при получении детальной информации по блогу: ', error);
      });
  }
}
