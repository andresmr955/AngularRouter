import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, { Navigation } from 'swiper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgComponent } from './components/img/img.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { NavComponent } from './components/nav/nav.component';
import { ReversePipe } from './website/pipes/reverse.pipe';
import { TimeAgoPipe } from './website/pipes/time-ago.pipe';
import { HighlightDirective } from './website/directives/highlight.directive';
import { TimeInterceptor } from './interceptors/time.interceptor';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { RegisterComponent } from './pages/register/register.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

SwiperCore.use([Navigation]);

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ImgComponent,
    ProductComponent,
    NavComponent,
    ReversePipe,
    TimeAgoPipe,
    HighlightDirective,
    HomeComponent,
    CategoryComponent, 
    RegisterComponent,
    NotFoundComponent,
    ProductDetailComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    SwiperModule
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TimeInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  exports: [ProductsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
