import {Component} from '@angular/core';

@Component({
  selector: 'app-subsection',
  templateUrl: './subsection.component.html',
})
export class SubsectionComponent {

  menuList = [];

  constructor() {
    this.menuList = [
      {'name': 'Кин', 'link': '/work'},
      {'name': 'Мех', 'link': '/work'},
      {'name': 'Стат', 'link': '/work'}
    ];
  }
}
