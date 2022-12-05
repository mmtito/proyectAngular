import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { PagesComponent } from './pages.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DashboardComponent,
    ProductComponent,
    CatalogueComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,    
  ],
  exports: [
    DashboardComponent,
    ProductComponent,
    CatalogueComponent,
    PagesComponent
  ]
})
export class PagesModule { }
