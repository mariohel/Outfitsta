import { TestBed, async } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { OutfitsComponent } from './outfits/outfits.component';
import { OutfitListComponent } from './outfits/outfit-list/outfit-list.component';
import { OutfitItemComponent } from './outfits/outfit-item/outfit-item.component';
import { OutfitsService } from './outfits/outfits.service';
import { OutfitTypePipe } from './outfits/outfit-type.pipe';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule.forRoot()],
      declarations: [
        AppComponent,
        OutfitsComponent,
        OutfitListComponent,
        OutfitItemComponent,
        OutfitTypePipe
      ],
      providers: [{provide: OutfitsService, useValue: {}}, OutfitTypePipe ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Outfista!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Outfista!');
  }));

  it('should render title "Outfista" in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Outfista!');
  }));
});
