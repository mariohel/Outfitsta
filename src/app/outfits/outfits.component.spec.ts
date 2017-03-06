import { async, ComponentFixture, TestBed , inject } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import { MaterialModule } from '@angular/material';
import { Injectable } from '@angular/core';
import { Http, HttpModule, XHRBackend, Response, ResponseOptions } from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AppRoutingModule }     from '../app-routing.module';
import { OutfitsService } from './outfits.service';
import { OutfitTypePipe } from './outfit-type.pipe';
import {Outfit} from './outfit.model';
import { OutfitsComponent } from './outfits.component';
import { OutfitListComponent } from './outfit-list/outfit-list.component';
import { OutfitItemComponent } from './outfit-item/outfit-item.component';
import { CartComponent } from '../cart/cart.component';
import { PageNotFoundComponent }   from '../not-found.component';

describe('OutfitsComponent', () => {
  let component: OutfitsComponent;
  let fixture: ComponentFixture<OutfitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule,HttpModule,MaterialModule.forRoot()],
      declarations: [ 
        CartComponent,
        PageNotFoundComponent,
        OutfitsComponent,
        OutfitListComponent,
        OutfitItemComponent,
        OutfitTypePipe
      ],
      providers: [
        OutfitsService,
        MockBackend,
        { provide: XHRBackend, useClass: MockBackend },
        { provide: APP_BASE_HREF, useValue: '/'}
      ]      
    })
    .compileComponents();
  }));

  beforeEach(inject([OutfitsService , MockBackend], async(service: OutfitsService, mockBackend: MockBackend) => {
    mockBackend.connections.subscribe((conn: MockConnection) => {
                conn.mockRespond(new Response(new ResponseOptions(
                ` {
                        "title":  "Casablanca Dress",
                        "img":    "assets/outfits/dress1.png",
                        "desc":   "Adrianna Papell Women's Casablanca Sleeveless Red Dress",
                        "price":  49.99,
                        "outfit_type":"dress"
                    }`
                    )));
            });
   }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutfitsComponent);
    component = fixture.componentInstance;
    component.cartList=[{
                        "title":  "Casablanca Dress",
                        "img":    "assets/outfits/dress1.png",
                        "desc":   "Adrianna Papell Women's Casablanca Sleeveless Red Dress",
                        "price":  49.99,
                        "outfit_type":"dress"
                    }];
    fixture.autoDetectChanges();
  });
  
  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should render app-outfit-list tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-outfit-list').outerHTML).toContain('app-outfit-list');
  }));

  it('should render (1) in Carts Button', async(() => {    
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.outfit_cart').innerHTML).toContain('1');
  }));

});
