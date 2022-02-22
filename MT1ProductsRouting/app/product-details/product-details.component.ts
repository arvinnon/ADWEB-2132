import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  list= [1,2,3,4,5];

  Product: any[] = [
  {
    "id": "TSHIRT-VINTAGE001",
    "image":"assets/t1.jpg",
    "name": "1994 Vintage Mayweather Tshirt",
    "description": "Comfortable, casual and loose fitting, our heavyweight dark color t-shirt will quickly become one of your favorites.",
  },
  {
    "id": "TSHIRT-VINTAGE002",
    "image":"assets/t2.jpg",
    "name": "Vintage 1977 Nirvana Tshirt",
    "description": "Comfortable, casual and loose fitting, our heavyweight dark color t-shirt will quickly become one of your favorites.",
  },
  {
    "id": "TSHIRT-VINTAGE003",
    "image":"assets/t3.jpg",
    "name": "90s Chicago Bull Tshirt",
    "description": "Comfortable, casual and loose fitting, our heavyweight dark color t-shirt will quickly become one of your favorites.",
  },

  {
    "id": "SHOES-VINTAGE001",
    "image":"assets/s1.jpg",
    "name": "Heyfreud French Wooden Shoes",
    "description": "Unstructured fabric shoulder bag that can either be worn parallel to your body, or across it.",
  },
  {
    "id": "SHOES-VINTAGE002",
    "image":"assets/s2.jpg",
    "name": "Vintage 60s Brunswick Shoes",
    "description": "Unstructured fabric shoulder bag that can either be worn parallel to your body, or across it.",
  },
  {
    "id": "SHOES-VINTAGE003",
    "image":"assets/s3.jpg",
    "name": "9Rare 95s Moreschi Shoes",
    "description": "Unstructured fabric shoulder bag that can either be worn parallel to your body, or across it.",
  },

  {
    "id": "HANDBAG-VINTAGE001",
    "image":"assets/h1.jpg",
    "name": "Handmade Vintage Leather Handbag",
    "description": "Made of 100% natural material and can be customized with your favorite pictures and text for the perfect gift or casual accessory.",
  },
  {
    "id": "HANDBAG-VINTAGE002",
    "image":"assets/h2.jpg",
    "name": "Handmade Buffalo Leather Handbag",
    "description": "Made of 100% natural material and can be customized with your favorite pictures and text for the perfect gift or casual accessory.",
  },
  {
    "id": "HANDBAG-VINTAGE003",
    "image":"assets/h3.jpg",
    "name": "Crossbody Leather Bag",
    "description": "Made of 100% natural material and can be customized with your favorite pictures and text for the perfect gift or casual accessory.",
  },

  {
    "id": "JOGGINGPANTS-VINTAGE001",
    "image":"assets/j1.jpg",
    "name": "Authentic Vintage Jogging Pants",
    "description": "Made of fabric that allow for maximum comfort and ease.",
  },
  {
    "id": "JOGGINGPANTS-VINTAGE002",
    "image":"assets/j2.jpg",
    "name": "ProGo Vintage Pants",
    "description": "Made of fabric that allow for maximum comfort and ease.",
  },
  {
    "id": "JOGGINGPANTS-VINTAGE003",
    "image":"assets/j3.jpg",
    "name": "Vintage Carhartt Pants",
    "description": "Made of fabric that allow for maximum comfort and ease.",
  },

  {
    "id": "FACEMASK-VINTAGE001",
    "image":"assets/f1.jpg",
    "name": "Rockabilly Facemask",
    "description": "New and improved face mask with comfortable cotton frames for adults and kids are here.",
  },
  {
    "id": "FACEMASK-VINTAGE002",
    "image":"assets/f2.jpg",
    "name": "Vintage Luxury Facemask",
    "description": "New and improved face mask with comfortable cotton frames for adults and kids are here.",
  },
  {
    "id": "FACEMASK-VINTAGE003",
    "image":"assets/f3.jpg",
    "name": "Vintage Washable Facemask",
    "description": "New and improved face mask with comfortable cotton frames for adults and kids are here.",
  },

  {
    "id": "MUGS-VINTAGE001",
    "image":"assets/M4.jpg",
    "name": "Vintage Old Men Mug",
    "description": "Commuter mugs feature a rubber-lined lid for a tight, spill-resistant seal, twist the lid to reveal the sip opening",
  },
  {
    "id": "MUGS-VINTAGE002",
    "image":"assets/M5.jpg",
    "name": "Morning People Vintage Mug",
    "description": "Commuter mugs feature a rubber-lined lid for a tight, spill-resistant seal, twist the lid to reveal the sip opening",
  },
  {
    "id": "MUGS-VINTAGE003",
    "image":"assets/M6.jpg",
    "name": "Great Dad Vintage Mug",
    "description": "Commuter mugs feature a rubber-lined lid for a tight, spill-resistant seal, twist the lid to reveal the sip opening",
  },
  
  

  
  
  

  ];
  



  trackByData(index:number, Copartner:any): number {
    return Copartner.id;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
