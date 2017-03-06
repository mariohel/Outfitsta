import { OutfitTypePipe } from './outfit-type.pipe';
import {Outfit} from './outfit.model';

describe('OutfitTypePipe', () => {
  let pipe: OutfitTypePipe;
  const data: Outfit[] = [
      {
            'title':  'Casablanca Dress',
            'img':    'assets/outfits/dress1.png',
            'desc':   'Adrianna Papell Women\'s Casablanca Sleeveless Red Dress',
            'price':  49.99,
            'outfit_type': 'dress'
        },
        {
          'title':  'Shirt 2',
          'img':    'assets/outfits/shirt2.png',
          'desc':   'Shirt 2 Description',
          'price':  19.49,
          'outfit_type': 'shirt'
        }
    ];
  beforeEach(() => {
    pipe = new OutfitTypePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms filtering with outfit_type "dress"', () => {
    expect(pipe.transform(data, 'dress')).toEqual(
      [{
            'title':  'Casablanca Dress',
            'img':    'assets/outfits/dress1.png',
            'desc':   'Adrianna Papell Women\'s Casablanca Sleeveless Red Dress',
            'price':  49.99,
            'outfit_type': 'dress'
    }]);
  });
});
