import {Component} from '@angular/core';
import {SessionStorageService} from '../../storage/session-storage.service';

@Component({
  selector: 'app-hints',
  templateUrl: './hints.component.html',
})
export class HintsComponent {
  hiddenHints = false;

  constructor(private sessionStorageService: SessionStorageService) {

    this.sessionStorageService.authenticated.subscribe(item => {
      const hints = localStorage.getItem('hints');
      if (hints === null && !item) {
        this.hiddenHints = true;
        localStorage.setItem('hints', 'yes');
      }
    });
  }
}
