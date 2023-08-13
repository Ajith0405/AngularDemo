import { Component } from "@angular/core";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']

})

export class HeaderComponent{
    title = "Angular";
    message:string = "Angular is a front-end Framework";
    display:boolean = true;

    onClick(){
        if(this.display==true)
        this.display = false;
        else{
            this.display = true;
        }
    }

}