import { Pipe, PipeTransform } from '@angular/core';
import {Outfit} from './outfit.model';

@Pipe({
  name: 'outfitType'
})
export class OutfitTypePipe implements PipeTransform {

  transform(outfits: Outfit[], type: string): any {    
    return (outfits)?outfits.filter(value => type.includes(value.outfit_type) ):outfits;
  }

}
