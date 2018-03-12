import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  shop = true;
  cart = false;
  order = false;

  openView(e){
    if(e == 'shop'){
      this.shop = true;
      this.cart = false;
      this.order = false;
    }
    if(e == 'cart'){
      this.shop = false;
      this.cart = true;
      this.order = false;
    }
    if(e == 'order'){
      this.shop = false;
      this.cart = false;
      this.order = true;
    }
  }

  buy(){
    this.openView('cart');
  }

  checkout(){
    this.openView('order');
  }
}
