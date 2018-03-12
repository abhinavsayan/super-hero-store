import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

  cart = [];

  constructor() { 
    this.load();
  }


  getCart() {
    return this.cart;
  }

  addItem(item) {
    var found = false;
    for (var i = 0; i < this.cart.length; i++) {
      if (this.cart[i].id == item.id) {
        this.cart[i].quantity++;
        return;
      }
    }
    if (!found) {
      this.cart.push({
        id: item.id,
        quantity: 1,
        name: item.name,
        price: item.price
      });
    }
    this.save();
  }

  removeItem(id) {
    for (var i = 0; i < this.cart.length; i++) {
      if (this.cart[i].id == id) {
        this.cart.splice(i, 1);
      }
    }
    this.save();
  }

  updateCart(id, qty) {
    for (var i = 0; i < this.cart.length; i++) {
      if (this.cart[i].id == id) {
        this.cart[i].quantity = qty;
        if (qty == 0)
          this.cart.splice(i, 1);
      }
    }
    this.save();
  }

  save(){
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  load(){
    this.cart = JSON.parse(localStorage.getItem('cart'));
    if(!this.cart)
      this.cart = [];
  }

}
