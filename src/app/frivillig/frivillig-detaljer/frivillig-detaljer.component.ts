import { Component, OnInit, Input } from '@angular/core';
import { Frivillig } from "app/frivillig/frivillig.model";

@Component({
  selector: 'app-frivillig-detaljer',
  templateUrl: './frivillig-detaljer.component.html',
  styleUrls: ['./frivillig-detaljer.component.css']
})
export class FrivilligDetaljerComponent implements OnInit {
  @Input() frivillig: Frivillig;


  constructor() { }

  ngOnInit() {
  }

}