import {Component} from '@angular/core';
import {GlobalParamsAuth} from '../../storage/global-params-auth';

@Component({
  selector: 'app-modal-auth',
  templateUrl: './modal_auth.component.html',
})
export class ModalAuthComponent {
  constructor(public globalParamsAuth: GlobalParamsAuth,
              ) {
  }

  close() {
    this.globalParamsAuth.showModalAuth = false;
  }
}
