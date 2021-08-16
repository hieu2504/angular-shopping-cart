import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

  products = [
    {
      name: 'Hoa cúc',
      description: 'Hoa đột biết',
      thumbnail: '/assets/images/hoa1.jpg',
      price: 9.99,
      quantity: 5
    },
    {
      name:'Hoa sen',
      description:'Xịn nhất quả đất',
      thumbnail: '/assets/images/hoa2.jpg',
      price: 100,
      quantity: 20
    },
    {
      name:'Hoa hồng',
      description:'Hoa hồng xanh siêu đắt',
      thumbnail: '/assets/images/hoa3.jpg',
      price: 1000,
      quantity: 2
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
