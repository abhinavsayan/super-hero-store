import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ItemComponent } from './components/item/item.component';
import { ShopPageComponent } from './components/shop-page/shop-page.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';

import { CartService } from './service/cart.service';
import { ItemService } from './service/item.service';
import { OrderService } from './service/order.service';
import { OrderComponent } from './components/order/order.component';


import { FormWizardModule } from 'angular2-wizard';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ItemComponent,
    ShopPageComponent,
    CartComponent,
    HomeComponent,
    OrderComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    FormWizardModule,
    HttpModule
  ],
  providers: [
    CartService,
    ItemService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
