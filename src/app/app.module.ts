import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogComponent } from './dialog.component';
import { PageNotFoundComponent } from './not-found.component';
import { OutfitsComponent } from './outfits/outfits.component';
import { OutfitsService} from './outfits/outfits.service';
import { OutfitTypePipe } from './outfits/outfit-type.pipe';
import { OutfitListComponent } from './outfits/outfit-list/outfit-list.component';
import { OutfitItemComponent } from './outfits/outfit-item/outfit-item.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart/cart.service';
import { CartGuard } from './cart/cart.guard';


@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    PageNotFoundComponent,
    OutfitsComponent,
    OutfitListComponent,
    OutfitTypePipe,
    CartComponent,
    OutfitItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutingModule
  ],
  providers: [OutfitsService, CartService, CartGuard],
  entryComponents: [DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
