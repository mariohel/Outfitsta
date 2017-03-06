import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppRoutingModule }     from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './not-found.component';
import { OutfitsComponent } from './outfits/outfits.component';
import { OutfitsService} from './outfits/outfits.service';
import { OutfitTypePipe } from './outfits/outfit-type.pipe';
import { OutfitListComponent } from './outfits/outfit-list/outfit-list.component';
import { CartComponent } from './cart/cart.component';
import { OutfitItemComponent } from './outfits/outfit-item/outfit-item.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    OutfitsComponent,
    OutfitListComponent,
    OutfitTypePipe,
    CartComponent,
    OutfitItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutingModule
  ],
  providers: [OutfitsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
