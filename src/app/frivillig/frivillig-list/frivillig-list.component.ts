import { Component, OnInit } from '@angular/core';
import { Frivillig } from "app/frivillig/frivillig.model";

@Component({
  selector: 'app-frivillig-list',
  templateUrl: './frivillig-list.component.html',
  styleUrls: ['./frivillig-list.component.css']
})
export class FrivilligListComponent implements OnInit {
  frivillige: Frivillig[] = [
    new Frivillig(1, "Hans", "Hansen", "Hansvej 1", "hans@hansen.dk", "23445565"),
    new Frivillig(2, "Jens", "Jensen", "Jensvej 2", "jens@jensen.dk", "12345789"),
  ];
  constructor() { }

  ngOnInit() {
  }

}
