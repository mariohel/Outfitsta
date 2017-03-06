import { Outfit } from '../outfits/outfit.model';
export class Cart {
  id = 0;
  name = '';
  email = '';
  payment = 'cash';
  address: Address;
  outfits: Outfit[];
}

export class Address {
  street = '';
  city   = '';
  state  = '';
  zip    = '';
}

export const states = ['CA', 'MD', 'OH', 'VA'];
