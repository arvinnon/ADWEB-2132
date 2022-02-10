import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})
export class JoinUsComponent implements OnInit {
 

  fname = "";
  lname = "";
  email = "";
  insti = "";

  showData($event:any) {
    console.log("Button is CLicked")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
