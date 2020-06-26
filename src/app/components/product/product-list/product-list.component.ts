import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { MatDialog } from '@angular/material/dialog';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';
import { productList } from '../products-data';

@Component( {
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: [ './product-list.component.css' ]
} )
export class ProductListComponent implements OnInit {

  products: Product[] = productList;

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
