import { Component, OnInit } from '@angular/core';
import { Laug } from "app/laug/laug.model";

@Component({
  selector: 'app-laug',
  templateUrl: './laug.component.html',
  styleUrls: ['./laug.component.css']
})
export class LaugComponent implements OnInit {
selectedLaug: Laug;
  constructor() { }

  ngOnInit() {
  }

}
