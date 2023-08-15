import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  pincode:number = 0;
  addToCart:number = 0;

  products = {
    pname:"Iphone 14 Max",
    pcost:45000,
    pspecs:"8gb Ram, 128gb Rom",
    discount:10,
    stock:10,
    pimage:  'assets/apple-iphone-14-pro-max-1.jpg'
    
   }
  
    getOfferPrice() {
        return  this.products.pcost - this.products.pcost * this.products.discount/100
   }

   onPinChange(event:any){
    //console.log(event.target.value)
    this.pincode = event.target.value
   }

   decrementCartValue(){
    if(this.addToCart !=0){
      this.addToCart--;
    }
    
   }
   IncreamentCartValue(){
    if( this.addToCart < this.products.stock)
    this.addToCart++;
   }
   
}
