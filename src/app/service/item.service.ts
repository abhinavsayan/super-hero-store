import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ItemService {

  constructor(private http: Http,) { }

  getItems() {
    return this.http.get('/service/get-items').map(res => res.json());
  }

}
