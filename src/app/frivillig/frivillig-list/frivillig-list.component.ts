import { Component, OnInit } from '@angular/core';
import { Frivillig } from "app/frivillig/frivillig.model";

@Component({
  selector: 'app-frivillig-list',
  templateUrl: './frivillig-list.component.html',
  styleUrls: ['./frivillig-list.component.css']
})
export class FrivilligListComponent implements OnInit {
  frivillige: Frivillig[] = [

    new Frivillig(1, "Hans", "Hansen","Horsensvej", "hh@hotmil.com","12345678"),
    new Frivillig(2, "Jens", "Jensen","Vejlevej","jj@hotmail.com","87654321"),
<<<<<<< HEAD
=======

>>>>>>> 1e8cc3e5b9e68c902b0caad99c3bd3f2d06e1e08
    new Frivillig(1, "Hans", "Hansen", "Hansvej 1", "hans@hansen.dk", "23445565"),
<<<<<<< HEAD
    new Frivillig(2, "Jens", "Jensen", "Jensvej 2", "jens@jensen.dk", "12345789"),
<<<<<<< HEAD

=======
=======
    new Frivillig(2, "Jens", "Jensen", "Jensvej 2", "jens@jensen.dk", "12345789")
>>>>>>> 937e789c7d908ce18c6722bf34bc1a830393bc8a
>>>>>>> 1e8cc3e5b9e68c902b0caad99c3bd3f2d06e1e08
  ];
  constructor() { }

  ngOnInit() {
  }

}
