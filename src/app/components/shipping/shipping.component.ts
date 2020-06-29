import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Shipping } from './shipping.model';

@Component( {
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: [ './shipping.component.css' ]
} )
export class ShippingComponent implements OnInit {

  shippingCost;

  constructor( private cartService: CartService ) { }

  ngOnInit(): void {
    this.shippingCost = this.cartService.getShippingPrices();
  }



}
