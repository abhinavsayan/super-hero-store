import { Component, OnInit , Output, EventEmitter} from '@angular/core';

import { ItemService } from './../../service/item.service';
import { CartService } from './../../service/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items:any[];
  @Output('buy') buyEve = new EventEmitter();

  constructor(private itemService: ItemService, private cart:CartService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(res => {
      this.items = res;
    });
  }

  buy(e){
    this.cart.addItem(e);
    this.buyEve.emit();
  }
  
  add(e){
    this.cart.addItem(e);
  }

}
