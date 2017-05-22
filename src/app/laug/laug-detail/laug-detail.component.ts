import { Component, OnInit, Input } from '@angular/core';
import { Laug } from "app/laug/laug.model";

@Component({
  selector: 'app-laug-detail',
  templateUrl: './laug-detail.component.html',
  styleUrls: ['./laug-detail.component.css']
})
export class LaugDetailComponent implements OnInit {
@Input() laug: Laug;
  constructor() { }

  ngOnInit() {
  }

}
