import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  ProductList = [
    { name: "ali", lastname: "sade" },
    { name: "farshid", lastname: "pichide" },
    { name: "mamad", lastname: "felfeli" }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
