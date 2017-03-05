import { async, ComponentFixture, TestBed , inject } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { Injectable } from '@angular/core';
import { Http, HttpModule, XHRBackend, Response, ResponseOptions } from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {OutfitsService} from './outfits.service';
import {OutfitTypePipe} from './outfit-type.pipe';
import {Outfit} from './outfit.model';
import { OutfitsComponent } from './outfits.component';
import { OutfitListComponent } from './outfit-list/outfit-list.component';

describe('OutfitsComponent', () => {
  let component: OutfitsComponent;
  let fixture: ComponentFixture<OutfitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule,MaterialModule.forRoot()],
      declarations: [ OutfitsComponent,OutfitListComponent,OutfitTypePipe],
      providers: [
        OutfitsService,
        MockBackend,
        { provide: XHRBackend, useClass: MockBackend }
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
    fixture.autoDetectChanges();
  });
  
  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should render app-outfit-list tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-outfit-list').outerHTML).toContain('app-outfit-list');
  }));

});
