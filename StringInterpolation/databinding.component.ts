import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
 name:string = "Redmi Note 12";
 price:number=15000;
 specs:string= "6Gb Ram, 128Gb Rom, 50MP Rear, 13MP front";

 /* Object */

 products = {
  pname:"Iphone",
  pcost:45000,
  pspecs:"8gb Ram, 128gb Rom",
  discount:10,
  stock:5,
  
 }

  getOfferPrice() {
      return  this.products.pcost - this.products.pcost * this.products.discount/100
 }


}

