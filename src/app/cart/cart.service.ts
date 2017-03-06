import { Injectable } from '@angular/core';
import { Outfit } from '../outfits/outfit.model';

@Injectable()
export class CartService {

cartList: Outfit[] = [];

constructor() { }

addToCart(item) {
  this.cartList.push(item);
}

get isEmpty(): boolean {
  return (this.cartList.length === 0);
}

checkout() {
  return 'CheckOut Successfull!';
}

}
