import { Injectable } from '@angular/core';
import { Outfit } from '../outfits/outfit.model';
import { Cart } from './cart.model';

@Injectable()
export class CartService {

cartList: Outfit[] = [];

constructor() { }

addToCart(item: Outfit) {
  this.cartList.push(item);
}

get isEmpty(): boolean {
  return (this.cartList.length === 0);
}

checkout(item: Cart) {
  return 'CheckOut is Successful!';
}

}
