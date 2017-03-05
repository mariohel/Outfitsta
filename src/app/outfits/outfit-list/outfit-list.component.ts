import { Component, OnInit , Input} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {OutfitsService} from '../outfits.service';
import {OutfitTypePipe} from '../outfit-type.pipe';
import {Outfit} from '../outfit.model';

@Component({
  selector: 'app-outfit-list',
  templateUrl: './outfit-list.component.html',
  styleUrls: ['./outfit-list.component.css'],
  providers: [OutfitsService,OutfitTypePipe]
})
export class OutfitListComponent implements OnInit{

@Input() type: string = 'dress';
@Input() list: Outfit[];

constructor(private service: OutfitsService) {}

ngOnInit() {
}

}

