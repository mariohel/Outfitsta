import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';

import { Outfit } from '../outfit.model';
import { OutfitItemComponent } from './outfit-item.component';

describe('OutfitItemComponent', () => {
  let component: OutfitItemComponent;
  let fixture: ComponentFixture<OutfitItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule.forRoot()],
      declarations: [ OutfitItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutfitItemComponent);
    component = fixture.componentInstance;
    component.item={
            "title":  "Casablanca Dress",
            "img":    "assets/outfits/dress1.png",
            "desc":   "Adrianna Papell Women's Casablanca Sleeveless Red Dress",
            "price":  49.99,
            "outfit_type":"dress"
        };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a md-card-title tag', async(() => {
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
  }));

});
