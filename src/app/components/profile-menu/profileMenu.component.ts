import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profileMenu.component.html',
})

export class ProfileMenuComponent {
  constructor(public router: Router) {
  }

}
