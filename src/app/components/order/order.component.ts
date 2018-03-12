import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { CartService } from './../../service/cart.service';
import { OrderService } from './../../service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderDetails:any = {
    user : {},
    address : {},
    payment : 'creditCard'
  };

  constructor(private http: Http, private cartService:CartService, private orderderService:OrderService) { }

  ngOnInit() {
    this.orderDetails.cart = this.cartService.getCart();
  }


  populateAddress(){
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(this.showPosition.bind(this));
    };
  }

  showPosition(position) {
    console.log("Latitude: " + position.coords.latitude +
      "<br>Longitude: " + position.coords.longitude);

    this.http.get('https://locationiq.org/v1/reverse.php?key=913b7431059294&format=json&lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&accept-language=en').map(res => res.json()).subscribe(res => {
      this.orderDetails.address.pin = res.address.postcode;
      this.orderDetails.address.city = res.address.county;
      this.orderDetails.address.state = res.address.state;
      this.orderDetails.address.address = res.display_name;
    });
  }

  onComplete(e){
    this.orderderService.procesOrder(this.orderDetails).subscribe(res => {
      this.orderDetails.orderID = res.orderId
  });
  }

}
