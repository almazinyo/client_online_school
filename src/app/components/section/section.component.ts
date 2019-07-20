import {Component} from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
})
export class SectionComponent {

  menuList = [];

  constructor() {
    this.menuList = [
      {'name': 'Механик', 'link': '/subsection'},
      {'name': 'МКТ', 'link': '/subsection'},
      {'name': 'Электр', 'link': '/subsection'}
    ];
  }
}
