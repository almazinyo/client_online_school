import {Component} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  menuList: InterFaceMenu[];

  constructor() {
    this.menuList = [
      {link: 'main', name: 'Физика'},
      {link: 'main', name: 'Химия'},
    ];
  }
}
