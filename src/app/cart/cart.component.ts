import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MdDialog , MdDialogRef } from '@angular/material';

import { DialogComponent } from '../dialog.component';
import { Outfit } from '../outfits/outfit.model';
import { Address, Cart, states } from './cart.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() cart: Cart;
  outfits: Outfit[] = [];

  checkOutForm: FormGroup;
  states = states;

  constructor(private fb: FormBuilder , private service: CartService , private dialog: MdDialog , private router: Router) {
    this.createForm();
  }

  createForm() {
    this.outfits = this.service.cartList;
    this.checkOutForm = this.fb.group({
      name: ['', Validators.required ],
      email: ['', Validators.required ],
      payment: ['cash', Validators.required ],
      outfits: [this.outfits],
      address: this.fb.group({
        street: '',
        city: '',
        state: '',
        zip: ''
      })
    });
  }

  onSubmit(item) {
    const message = this.service.checkout(item.value);
    let dialogRef: MdDialogRef<DialogComponent>;
    dialogRef = this.dialog.open(DialogComponent);
    dialogRef.componentInstance.message = message;
    dialogRef.afterClosed().subscribe(res => {
      this.router.navigate(['/']);
    });
  }

  ngOnInit() {
  }

}
