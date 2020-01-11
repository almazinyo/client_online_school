import {EventEmitter, Injectable} from '@angular/core';
import {HttpService} from '../../utils/http/http.service';

@Injectable()
export class HintsService {

  constructor(private httpService: HttpService) {
  }

}
