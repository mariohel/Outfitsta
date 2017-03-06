import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';
import { Outfit } from '../outfit.model';

@Component({
  selector: 'app-outfit-item',
  templateUrl: './outfit-item.component.html',
  styleUrls: ['./outfit-item.component.css']
})
export class OutfitItemComponent implements OnInit {

  @Input() item: Outfit;
  @Output() addToCart = new EventEmitter<Outfit>();
  constructor() { }

  ngOnInit() {
  }

  addToCartClicked(item) {
    this.addToCart.emit(item);
  }

}
