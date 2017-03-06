import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './not-found.component';
import { OutfitsComponent } from './outfits/outfits.component';
import { CartComponent } from './cart/cart.component';
import { CartGuard } from './cart/cart.guard';

const routes: Routes = [
  { path: '',  component: OutfitsComponent },
  { path: 'cart',     component: CartComponent , canActivate: [CartGuard] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [CartGuard]
})
export class AppRoutingModule {}
