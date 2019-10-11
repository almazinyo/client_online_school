import {Component} from '@angular/core';
import {BlogService} from './blog.service';
import {Router} from '@angular/router';
import {BreadcrumbsService} from '../breadcrumbs/breadcrumbs.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
})
export class BlogComponent {
  blogs: InterFaceBlog[] = [];

  constructor(private blogService: BlogService,
              private router: Router,
              private breadcrumbsService: BreadcrumbsService) {
    this.breadcrumbsService.title = 'Блог';

    this.blogService.getReviews().then((data: InterFaceBlog[]) => {
        this.blogs = data;
      },
      (error) => {
        console.log('Ошибка при получении информации по блогам: ', error);
      });
  }

  getBlog(slug) {
    this.router.navigate(['blog/' + slug]);
  }
}
