import { async, ComponentFixture, TestBed , inject } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { Injectable } from '@angular/core';
import { Http, HttpModule, XHRBackend, Response, ResponseOptions } from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {OutfitsService} from '../outfits.service';
import {OutfitTypePipe} from '../outfit-type.pipe';
import {Outfit} from '../outfit.model';
import { OutfitListComponent } from './outfit-list.component';

describe('OutfitListComponent', () => {
  let component: OutfitListComponent;
  let fixture: ComponentFixture<OutfitListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule,MaterialModule.forRoot()],
      declarations: [ OutfitListComponent,OutfitTypePipe ],
      providers: [
        OutfitsService,
        MockBackend,
        { provide: XHRBackend, useClass: MockBackend }
        ]      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutfitListComponent);
    component = fixture.componentInstance;
    component.list=[
      {
            "title":  "Casablanca Dress",
            "img":    "assets/outfits/dress1.png",
            "desc":   "Adrianna Papell Women's Casablanca Sleeveless Red Dress",
            "price":  49.99,
            "outfit_type":"dress"
        }
    ];
    fixture.detectChanges();
  });


  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));

  /*it('should render title in a md-card-title tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('md-card-title').innerHTML).toContain('Casablanca Dress');
  }));

  it('should render desc in a p tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').innerHTML).toContain('Adrianna Papell Women\'s Casablanca Sleeveless Red Dress');
  }));

  it('should render price in a md-card-subtitle tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('md-card-subtitle').innerHTML).toContain('$49.99');
  }));*/
});
