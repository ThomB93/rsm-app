import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Laug } from "app/laug/laug.model";
import {LaugService} from "app/laug.service";

@Component({
  selector: 'app-laug-list',
  templateUrl: './laug-list.component.html',
  styleUrls: ['./laug-list.component.css']
})
export class LaugListComponent implements OnInit {
@Output() laugWasSelected = new EventEmitter<Laug>();
  laugs: any = [];
  modelLaugs: Laug[] = [];
  frivillige: any = [];
  constructor(private laugService : LaugService) { }

  ngOnInit() {
    this.laugService.getAllLaug().subscribe(laug => {
      this.laugs = laug; //save posts in array
    });
    for(var i = 0; i < this.laugs.length; i++) {
      this.modelLaugs.push(new Laug("sasdasd", "asdasd"))
    }
    this.laugService.getAllFrivillige().subscribe(frivillig => {
      this.frivillige = frivillig; //save posts in array
    });
  }
  onLaugSelected(laug: Laug) {
   this.laugWasSelected.emit(laug); //føre til laug.component.html
  }

}
