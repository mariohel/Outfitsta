import { async, ComponentFixture, TestBed , inject } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';

import { Outfit } from '../outfit.model';
import { OutfitTypePipe } from '../outfit-type.pipe';
import { OutfitListComponent } from './outfit-list.component';
import { OutfitItemComponent } from '../outfit-item/outfit-item.component';

describe('OutfitListComponent', () => {
  let component: OutfitListComponent;
  let fixture: ComponentFixture<OutfitListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule.forRoot()],
      declarations: [ OutfitItemComponent,OutfitListComponent,OutfitTypePipe]
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

  /*it('should render a app-outfit-item tag in md-grid-list tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('md-grid-tile').outerHTML).toContain('app-outfit-item');
  }));*/

 
});
