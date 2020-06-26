import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { MaterialModule } from './material.module';
import { ProductAlertsComponent } from './components/product/product-alerts/product-alerts.component';
import { ProductDialogComponent } from './components/product/product-dialog/product-dialog.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { ComponentsModule } from './components/components.module';

@NgModule( {
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
