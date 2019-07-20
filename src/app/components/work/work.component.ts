import {Component} from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
})
export class WorkComponent {

  menuList = [];

  constructor() {
    this.menuList = [
      {'name': 'Первый урок', 'link': '/work-details'},
      {'name': 'Второй урок', 'link': '/work-details'},
      {'name': 'Третий урок', 'link': '/work-details'}
    ];
  }
}
