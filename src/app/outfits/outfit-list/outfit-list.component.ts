import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {OutfitsService} from '../outfits.service';
import {Outfit} from '../outfit.model';

@Component({
  selector: 'app-outfit-list',
  templateUrl: './outfit-list.component.html',
  styleUrls: ['./outfit-list.component.css'],
  providers: [OutfitsService]
})
export class OutfitListComponent implements OnInit{

@Input() type: string = '';
@Input() list: Outfit[];
@Output() addToCart = new EventEmitter<Outfit>();

constructor(private service: OutfitsService) {}

ngOnInit() {
}

addToCartClicked(item) {
    this.addToCart.emit(item);
}

}

