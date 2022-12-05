import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BreadcrumbsComponent,
    SidebarComponent,
    FooterComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
  ],
  exports:[
    HeaderComponent,
    BreadcrumbsComponent,
    SidebarComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
