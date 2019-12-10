import {Component} from '@angular/core';
import {FooterService} from './footer.service';
import {Router} from '@angular/router';
import {BreadcrumbsService} from '../breadcrumbs/breadcrumbs.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {

  footers: InterFaceFooter[] = [];

  constructor(private footerService: FooterService,
              private router: Router,
              private breadcrumbsService: BreadcrumbsService) {
    this.footerService.getFooters().then((data: InterFaceFooter[]) => {
        this.footers = data;
      },
      (error) => {
        console.log('Ошибка при получении информации по нижний колонтитул: ', error);
      });
  }

  getFooter(slug) {
    this.router.navigate(['footer/' + slug]);
  }
}
