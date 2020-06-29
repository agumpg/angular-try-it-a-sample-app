import { Injectable, OnInit } from '@angular/core';
import { Product } from '../components/product/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable( {
  providedIn: 'root'
} )
export class CartService {

  items: Product[] = [];

  constructor( private http: HttpClient ) { }

  addToCart( product: Product ): void {
    this.items.push( product );
  }

  getAllItems(): Product[] {
    return this.items;
  }

  getItemById( id: number ): Product {
    return this.items[ id ];
  }

  clearCart(): Product[] {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get( '/assets/shipping.json' );
  }

}
