import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  list= [1,2,3,4,5];

  Copartner: any[] = [{
    "company": "Micrsoft",
    "trademark":"assets/myMicro.png",
    "sponsorship": "Platinum",
    "website": "https://www.microsoft.com/en-ph",
  },
  {
    "company": "Apple, Inc",
    "trademark":"assets/myApple.png",
    "sponsorship": "Gold",
    "website": "https://www.apple.com/",
  }, 
  {
    "company": "Amazon",
    "trademark":"assets/myAma.png",
    "sponsorship": "Silver",
    "website": "https://www.amazon.com/",
  },
  {
    "company": "Google, Inc",
    "trademark":"assets/myGoogle.png",
    "sponsorship": "Bronze",
    "website": "https://www.google.com/",
  }];
  



  trackByData(index:number, Copartner:any): number {
    return Copartner.id;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
