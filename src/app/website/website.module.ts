import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { WebsiteRoutingModule } from './website-routing.module';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
        NavComponent,
        HomeComponent,
        RegisterComponent,
        ProductDetailComponent,
        LayoutComponent,
        ProfileComponent
        
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SharedModule
  ]
})
export class WebsiteModule { }
