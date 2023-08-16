import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent {

  listOfString:string[] = ["Pen","Pencil","Eraser","Compus"];

  listOfProducts:any=[
    {pname:"Iphone", pcost:50000, pcolor:"red"},

  ];

  menuItems:string[]=["Home","Contact","About","Sign In"];
   



}
