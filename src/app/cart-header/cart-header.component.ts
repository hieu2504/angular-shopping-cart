import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html'
})
export class CartHeaderComponent implements OnInit {
  title = "Shopping Cart";
  numberItems = 3;
  constructor() { }


  ngOnInit() {
    
  }

}
