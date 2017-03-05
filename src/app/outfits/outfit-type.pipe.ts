import { Pipe, PipeTransform } from '@angular/core';
import {Outfit} from './outfit.model';

@Pipe({
  name: 'outfitType'
})
export class OutfitTypePipe implements PipeTransform {

  transform(outfits: Outfit[], args?: any): any {    
    return (outfits)?outfits.filter(value => value.outfit_type.toLowerCase()===args[0].toLowerCase()):outfits;
  }

}
