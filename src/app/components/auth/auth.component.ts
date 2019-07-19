import {Component} from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-client',
  templateUrl: './auth.component.html',
})
export class AuthComponent {

  constructor(private authService: AuthService) {
  }
}
