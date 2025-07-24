import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { ImgComponent } from './img/img.component';
import { HighlightDirective } from './directives/highlight.directive';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, { Navigation } from 'swiper';
SwiperCore.use([Navigation]);

@NgModule({
  declarations: [
     ImgComponent,
     ProductComponent,
     ProductsComponent,
     ReversePipe,
     TimeAgoPipe,
     HighlightDirective
     
  ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule, 

  ], 
  exports: [
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    ReversePipe,
    TimeAgoPipe,
    HighlightDirective,
    SwiperModule
  ]
})
export class SharedModule { }
