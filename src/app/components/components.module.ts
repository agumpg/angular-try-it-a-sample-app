import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductDialogComponent } from './product/product-dialog/product-dialog.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProductAlertsComponent } from './product/product-alerts/product-alerts.component';


import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';

@NgModule( {
    declarations: [
        ProductAlertsComponent,
        ProductDetailsComponent,
        ProductDialogComponent,
        ProductListComponent,
        ToolbarComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule
    ],
    exports: [
        ProductAlertsComponent,
        ProductDetailsComponent,
        ProductDialogComponent,
        ProductListComponent,
        ToolbarComponent
    ],
    providers: [],
} )
export class ComponentsModule { }