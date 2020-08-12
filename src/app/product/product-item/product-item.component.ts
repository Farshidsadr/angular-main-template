import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[app-product-item]',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: { name: string, lastname: string }
  @Input() productIndex: number;

  constructor() { }

  ngOnInit(): void {
  }

}