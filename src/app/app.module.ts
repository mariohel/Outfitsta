import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { OutfitsComponent } from './outfits/outfits.component';
import { OutfitsService} from './outfits/outfits.service';
import { OutfitTypePipe } from './outfits/outfit-type.pipe';
import { OutfitListComponent } from './outfits/outfit-list/outfit-list.component';

@NgModule({
  declarations: [
    AppComponent,
    OutfitsComponent,
    OutfitListComponent,
    OutfitTypePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [OutfitsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
