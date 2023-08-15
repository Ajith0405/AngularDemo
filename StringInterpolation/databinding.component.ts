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
 
}
