import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  template: '<h4><i>{{message}}</i></h4>'
})
export class DialogComponent {
  message: String = '';
  constructor(public dialogRef: MdDialogRef<DialogComponent>) {
  }
}
