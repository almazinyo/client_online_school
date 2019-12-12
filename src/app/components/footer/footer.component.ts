import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {MenuService} from '../menu/menu.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {

  footers: InterFaceFooter[] = [];

  constructor(private router: Router,
              private menuService: MenuService) {
    this.menuService.getMenuCheck.subscribe(item => {
      this.footers = this.menuService.menu;
    });
  }
}
