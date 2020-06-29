import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';
import { productList } from '../products-data';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component( {
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: [ './product-details.component.css' ]
} )
export class ProductDetailsComponent implements OnInit {

  product: Product;
  products: Product[] = productList;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( params => {
      this.product = this.products[ +params.get( 'productId' ) ];
    } );
  }

  addToCart( product: Product ) {
    this.cartService.addToCart( product );
    this.snackBar.open( product.name + ' añadido a su carrito', 'Cerrar', { duration: 2000 } );
  }




}
