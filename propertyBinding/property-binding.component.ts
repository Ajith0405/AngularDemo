import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {

  pincode:number = 632319;
  products = {
    pname:"Iphone 14 Max",
    pcost:45000,
    pspecs:"8gb Ram, 128gb Rom",
    discount:10,
    stock:5,
    pimage:  'assets/apple-iphone-14-pro-max-1.jpg'
    
   }
  
    getOfferPrice() {
        return  this.products.pcost - this.products.pcost * this.products.discount/100
   }
  

}
