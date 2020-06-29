import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../product/product.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component( {
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: [ './cart.component.css' ]
} )
export class CartComponent implements OnInit {

  items: Product[];
  checkoutForm: FormGroup;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    // Inicializamos el formulario
    this.checkoutForm = this.formBuilder.group( {
      name: [ '', Validators.required ],
      address: [ '', Validators.maxLength( 10 ) ],
      email: [ '', Validators.compose( [ Validators.email, Validators.required ] ) ],
      acceptTerms: [ false, Validators.requiredTrue ]
    } );

    this.items = this.cartService.getAllItems();
  }

  isCardAvailable(): boolean {
    return !( this.items.length > 0 );
  }

  onSubmit( customerData ) {

    /* TODO: Procesar el pedido. Aquí enviaríamos los datos al servidor a través del servicio */

    // Reiniciamos carrito y formulario
    console.warn( this.items.length );
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn( 'Su pedido ha sido tramitado...', customerData );
  }

}
