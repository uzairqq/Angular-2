import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import {ActivatedRoute} from '@angular/router'; 

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
pageTitle:string='Product Detail:  ';
product:IProduct;
  constructor(private _route:ActivatedRoute) { }

  ngOnInit() {
    let id=+this._route.snapshot.paramMap.get('id');
    this.pageTitle += `${id}`;
    this.product={
      "productId":    id,
      "productName": "Garden sCart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2016",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    }
  }

}
