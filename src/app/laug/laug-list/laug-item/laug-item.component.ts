import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Laug } from "app/laug/laug.model";

@Component({
  selector: 'app-laug-item',
  templateUrl: './laug-item.component.html',
  styleUrls: ['./laug-item.component.css']
})
export class LaugItemComponent implements OnInit {
@Input() laug: Laug;
  @Output() laugSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  onSelected() {
    this.laugSelected.emit();
  }

}
