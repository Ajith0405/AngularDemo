import { Component } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {

   products=[
    {
      id:1,
      name:"Samsung Galaxy M34 5g ",
      description:"The Samsung Galaxy M34 5G is a good choice for multimedia consumption, thanks to its crisp and vibrant display and impressive battery life. Additionally, the device`s performance meets regular usage expectations, while its primary camera excels in capturing finer details with respectable colour accuracy even in cloudy conditions.",
      brand:"Samsung",
      color:["Black","White","Blue"],
      price:18999,
      items_lefft:10,
      imageUrl:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-m346bzsdins/gallery/in-galaxy-m34-5g-sm-m346-469618-sm-m346bzsdins-537393819?$650_519_PNG$",

    },
    {
      id:2,
      name:"Samsung Galaxy S21 FE",
      description:"Samsung Galaxy S21 FE price in India starts from Rs. 32,390. The lowest price of Samsung Galaxy S21 FE is Rs. 32,390 at amazon.in. This is 8 GB RAM / 128 GB internal storage base variant of Samsung Galaxy S21 FE which is available in White, Lavender, Graphite, Olive colour.",
      brand:"Samsung",
      color:["Black","White","Blue"],
      price:32999,
      items_lefft:5,
      imageUrl:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-g990bza4ins/gallery/in-galaxy-s21-fe-g990-464368-sm-g990bza4ins-537060677",
    }
  ];

}
