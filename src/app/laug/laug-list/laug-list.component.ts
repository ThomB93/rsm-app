import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Laug } from "app/laug/laug.model";

@Component({
  selector: 'app-laug-list',
  templateUrl: './laug-list.component.html',
  styleUrls: ['./laug-list.component.css']
})
export class LaugListComponent implements OnInit {
@Output() laugWasSelected = new EventEmitter<Laug>();
  laugs: Laug[] = [
    new Laug(1, 'Hestelaug', 'Hestelaug desc', './assets/images/hestesko.png'),
    new Laug(2, 'Kirkelaug', 'Kirkelaug desc', './assets/images/kirke.png'),
    new Laug(3, 'Møllelaug', 'Møllelaug desc', './assets/images/mølle.png'),
    new Laug(4, 'Skibslaug', 'Skibslaug desc', './assets/images/skib.png')
  ];
  constructor() { }

  ngOnInit() {
  }
  onLaugSelected(laug: Laug) {
   this.laugWasSelected.emit(laug); //føre til laug.component.html
  }

}
