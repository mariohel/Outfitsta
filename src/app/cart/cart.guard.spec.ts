import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { CartGuard } from './cart.guard';
import { CartService } from './cart.service';

describe('CartGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CartService, 
        CartGuard        
      ],
      imports: [RouterTestingModule]
    });
  });

  it('should create', inject([CartGuard], (guard: CartGuard) => {
      expect(guard).toBeTruthy();
  }));

  it('checks if a cart is Invalid',async(inject([CartService, CartGuard], (service,guard) => {
      service.cartList=[];
      expect(guard.canActivate()).toBeFalsy();
    })
  ));

  it('checks if a cart is valid',async(inject([CartService, CartGuard], (service,guard) => {     
      service.addToCart({});
      expect(guard.canActivate()).toBeTruthy();
    })
  ));
});
