import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';


@Component( {
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: [ './product-alerts.component.css' ]
} )
export class ProductAlertsComponent implements OnInit {

  @Input() product: Product;
  @Output() notify: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

}
