import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { MatDialog } from '@angular/material/dialog';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';

@Component( {
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: [ './product-list.component.css' ]
} )
export class ProductListComponent implements OnInit {

  products: Product[] = [
    {
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens'
    },
    {
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras'
    },
    {
      name: 'Phone Standard',
      price: 299,
      description: ''
    },
    {
      name: 'Phone 12 Pro',
      price: 1200,
      description: 'A large phone with one of the best screens'
    },
    {
      name: 'Phone 11 Pro',
      price: 800,
      description: 'A great phone with one of the best cameras'
    },
    {
      name: 'iPhone 6',
      price: 50,
      description: 'El más antiguo de todos'
    }
  ];

  constructor( private dialogMessage: MatDialog ) { }

  ngOnInit(): void {
  }

  showMessage() {
    window.alert( 'Producto compartido' );
  }

  notifyUser( event: Product ) {
    const dialogReference = this.dialogMessage.open( ProductDialogComponent, {
      width: '450px',
      data: { name: event.name, description: event.description, price: event.price }
    } )
  }

}
