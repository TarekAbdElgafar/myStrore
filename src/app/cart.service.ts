import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(
    private http: HttpClient
  ) { }
  items = [];

  addToCart(product) {
    console.log("CartService : add to cart");
    this.items.push(product);
    console.log(this.items);

  }

  getItems() {
    console.log("CartService : get items");
    console.log(this.items);

    return this.items;
  }

  clearCart() {
    console.log("CartService : clear cart");
    this.items = [];
    console.log(this.items);
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

}