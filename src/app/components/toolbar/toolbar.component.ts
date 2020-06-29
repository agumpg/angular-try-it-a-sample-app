import { Component, OnInit, OnChanges, AfterViewChecked } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component( {
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: [ './toolbar.component.css' ]
} )
export class ToolbarComponent implements OnInit {

  public totalItems: string = '';

  constructor( public cartService: CartService ) { }

  ngOnInit(): void {
  }





}
