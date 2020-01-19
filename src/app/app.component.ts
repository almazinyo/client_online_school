import {Component, OnInit} from '@angular/core';
import {AuthService} from './components/auth/auth.service';
import {SessionStorageService} from './storage/session-storage.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  checkAuth = false;
  urlAuth = ['/profile-details', '/profile-promotion', '/profile-buy', '/profile-points', '/profile-promotional-code'];

  constructor(private authService: AuthService,
              private router: Router,
              private location: Location,
              private sessionStorageService: SessionStorageService) {

    if (!this.checkAuth && this.urlAuth.indexOf(this.location.path()) !== -1) {
      //this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.authService.getInit().then(() => {
      },
      (error) => {
        console.log('Ошибка при получении информации о клиенте: ', error);
      });

    this.sessionStorageService.authenticated.subscribe(item => {
      this.checkAuth = item;
    });

  }
}


