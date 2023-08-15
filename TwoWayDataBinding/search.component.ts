import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchText:string ="Mens wear";
  searchValue:string = "Kids Wear";

  updateSearchText(event:any){
    this.searchText= event.target.value 
  }

  searchInput(event:any){
    console.log(event.target.value);
    
    
  }
}
