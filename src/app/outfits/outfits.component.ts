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
cartList:Outfit[]=[];
types:any[]=[
  {'label':'Dresses','value':'dress',selected:true},
  {'label':'Pants','value':'pant',selected:true},
  {'label':'Shorts','value':'short',selected:true},
  {'label':'Shirts','value':'shirt',selected:true},
  {'label':'Shoes','value':'shoe',selected:true}];

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

toggleType(item){
  item.selected= !item.selected;
}

onAddToCart(item) {
    this.cartList.push(item);
}

get selectedTypes(){
  var str="";
  this.types.forEach(element => {
    if(element.selected)
      str+=(str)?","+element.value:element.value;
  }); 
  return str+'';
}

}

