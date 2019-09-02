import {Component} from '@angular/core';
import {BlogService} from './blog.service';
import {BlogDetailsService} from '../blogDetails/blogDetails.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
})
export class BlogComponent {
  blogs: InterFaceBlog[] = [];

  constructor(private blogService: BlogService,
              private blogDetailsService: BlogDetailsService,
              private router: Router) {
    this.blogService.getReviews().then((data: InterFaceBlog[]) => {
        this.blogs = data;
      },
      (error) => {
        console.log('Ошибка при получении информации по блогам: ', error);
      });
  }

  getBlog(param) {
    if (param === '') {
      return false;
    }
    this.blogDetailsService.blogCurrent = param;
    this.router.navigate(['blog-details']);
  }
}
