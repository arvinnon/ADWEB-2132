import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  information!: any[];

  constructor( private myservice: MyserviceService) { }

  ngOnInit(): void {
    this.information = this.myservice.info();
  }

}
