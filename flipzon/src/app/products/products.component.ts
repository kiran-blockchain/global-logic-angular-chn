import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products =[{
    id:'1',
    name:'iPhone',
    image:'https://images-na.ssl-images-amazon.com/images/I/51n24DedexL._AC_SY445_.jpg',
    price:'2000',
    quantity:0
  },
  {
    id:'2',
    name:'Samsung',
    image:'https://images-na.ssl-images-amazon.com/images/I/51n24DedexL._AC_SY445_.jpg',
    price:'3000',
    quantity:0
  },
  {
    id:'3',
    name:'Nokia',
    image:'https://images-na.ssl-images-amazon.com/images/I/51n24DedexL._AC_SY445_.jpg',
    price:'4000',
    quantity:0
  }
];
totalPrice=0;
  constructor() { }

  ngOnInit() {
  }
  addToCart(i){
    i.quantity++;
    this.totalPrice+=parseInt(i.price)
  }
  removeFromCart(i){
    i.quantity--;
    this.totalPrice=this.totalPrice-parseInt(i.price);
  }

}
