import {EventEmitter, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {GlobalParamsUser} from './global-params-user';

@Injectable()
export class SessionStorageService {
  authenticated: EventEmitter<any> = new EventEmitter(false);
  data: '';

  constructor(private router: Router,
              private globalParamsUser: GlobalParamsUser) {
    this.change(this.tokenId !== '');
  }

  get tokenId(): string {
    return localStorage.getItem('token');
  }

  set tokenId(value: string) {
    localStorage.setItem('token', value);
    this.change(true);
  }

  change(data) {
    this.authenticated.emit(data);
  }

  exit() {
    this.globalParamsUser.fio = '';
    this.authenticated.emit(false);
    this.router.navigate(['/']);
    localStorage.removeItem('token');
  }

}
