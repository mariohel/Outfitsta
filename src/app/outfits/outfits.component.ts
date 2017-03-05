import { Component, OnInit , Input} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {OutfitsService} from './outfits.service';
import {Outfit} from './outfit.model';

@Component({
  selector: 'app-outfits',
  templateUrl: './outfits.component.html',
  styleUrls: ['./outfits.component.css'],
  providers: [OutfitsService]
})
export class OutfitsComponent implements OnInit{

list: Outfit[];

constructor(private service: OutfitsService) {}

ngOnInit() {
 this.getList();
}

getList(){
  this.service.getList('dress')
  .subscribe(data=>{
    this.list=data as Outfit[]; 
  },
  err => {
    // Log errors if any
    console.log(err);
  });
}
}

