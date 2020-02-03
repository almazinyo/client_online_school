import {Component} from '@angular/core';
import {SessionStorageService} from '../../storage/session-storage.service';
import {HintsService} from './hints.service';

@Component({
  selector: 'app-hints',
  templateUrl: './hints.component.html',
})
export class HintsComponent {
  hiddenHints = false;
  hints: InterFaceHints[] = [];
  currentHints = 0;

  constructor(private sessionStorageService: SessionStorageService,
              private hintsService: HintsService) {

    this.sessionStorageService.authenticated.subscribe(item => {
      const hints = localStorage.getItem('hints');
      if (hints === null && !item) {
        this.hiddenHints = true;
        localStorage.setItem('hints', 'yes');
      }
    });


    this.hintsService.getHints().then((data: InterFaceHints[]) => {
        this.hints = data;
      },
      (error) => {
        console.log('Ошибка при получении информации по блогам: ', error);
      });
  }

  nextHints() {
    this.currentHints++;
  }

  prevHints() {
    this.currentHints--;
  }
}
