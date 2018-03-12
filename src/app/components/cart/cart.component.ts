import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from './../../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Output('finalize') proceed = new EventEmitter();

  constructor(private cartService:CartService) { }

  cart = [];

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  remove(id){
    this.cartService.removeItem(id);
    this.cart = this.cartService.getCart();
  }

  update(e, id){
    this.cartService.updateCart(id, e.srcElement.value);
  }

  done(){
    this.proceed.emit();
  }
}
