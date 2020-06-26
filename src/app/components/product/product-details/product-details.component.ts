import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { productList } from '../products-data';
import { ActivatedRoute, Router } from '@angular/router';

@Component( {
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: [ './product-details.component.css' ]
} )
export class ProductDetailsComponent implements OnInit {

  product: Product;
  products: Product[] = productList;

  constructor( private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( params => {
      this.product = this.products[ +params.get( 'productId' ) ];
    } );
  }



}
