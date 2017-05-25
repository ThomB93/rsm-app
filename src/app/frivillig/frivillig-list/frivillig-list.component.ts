import { Component, OnInit } from '@angular/core';
import { Frivillig } from "app/frivillig/frivillig.model";

@Component({
  selector: 'app-frivillig-list',
  templateUrl: './frivillig-list.component.html',
  styleUrls: ['./frivillig-list.component.css']
})
export class FrivilligListComponent implements OnInit {
  frivillige: Frivillig[] = [
<<<<<<< HEAD
    new Frivillig(1, "Hans", "Hansen","Horsensvej", "hh@hotmil.com","12345678"),
    new Frivillig(2, "Jens", "Jensen","Vejlevej","jj@hotmail.com","87654321")
=======
    new Frivillig(1, "Hans", "Hansen", "Hansvej 1", "hans@hansen.dk", "23445565"),
    new Frivillig(2, "Jens", "Jensen", "Jensvej 2", "jens@jensen.dk", "12345789"),
>>>>>>> b729d581ef0adad7d32a68bf928ffd873160741a
  ];
  constructor() { }

  ngOnInit() {
  }

}
