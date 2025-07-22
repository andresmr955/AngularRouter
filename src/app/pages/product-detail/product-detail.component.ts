import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from './../../models/product.model'
import { ProductsService } from 'src/app/services/products.service';
import { switchMap, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  product: Product | null = null;
  productId: string | null = null;
  productImagesRandom: string[] = [];


  constructor(
    private route: ActivatedRoute, 
    private productsService: ProductsService,
    private Router: Router
  ){
    
  }
  ngOnInit(): void{
     this.productImagesRandom = Array.from({ length: 5 }, () =>
    `https://picsum.photos/300?random=${Date.now()}-${Math.floor(Math.random() * 10000)}`
  );

    this.route.paramMap
    .pipe(
      switchMap(params => {
      this.productId = params.get('id');
      if(this.productId){
        return this.productsService.getOne(this.productId)
      }
      return [null];
      })
    )
    .subscribe(data => {
      this.product = data
    });
    
    this.productImagesRandom = Array.from({length: 5}, () => `https://picsum.photos/200?random=${Math.floor(Math.random() * 1000)}`)
  }

  goToBack(id:any){
    this.Router.navigate(['/category', this.product?.category.id])
  }
}
