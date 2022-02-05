
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  studName = "";
  prelim = 0;
  midterm=0;
  final= 0;
  average = (this.prelim + this.midterm + this.final)/3

























  /*
  n1 = 70;
  n2 = 30;
  sum = 0;
  diffe = 0;
  quo = 0;
  prod = 0;
  */

   /*
  //class binding
  appliedCSSClass = 'green';
  notapplieCSSClass = false;
  //property binding
  clientName:string = 'Arvin Non';
  //style binding
  myColor = 'red';


  title = 'Interpolation Binding';
  appName = 'This is an one-way data binding';
  header1 = 'Number Interpolation';
//numeric bindings
  */
  //two-way data binding

  showData($event:any) {
    console.log("Button is Clicked!");
  }

  //keyup function
  getData(data:any){
    console.warn(data)
  }

}


