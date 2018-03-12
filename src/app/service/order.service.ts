import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {

  constructor(private http:Http) { }

  procesOrder(order){
    return this.http.post('/service/process-order', { order : order }).map(res => res.json());
  }

}
