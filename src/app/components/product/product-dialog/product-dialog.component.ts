import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../product.model';

@Component( {
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: [ './product-dialog.component.css' ]
} )
export class ProductDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ProductDialogComponent>,
    @Optional() @Inject( MAT_DIALOG_DATA ) public data: Product
  ) { }

  ngOnInit(): void {
  }

}
