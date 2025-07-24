import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from './../../../models/product.model';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-category',
  
  // templateUrl: './category.component.html',
// <!-- <app-products [products]="products" (loadMoreClicked)="onLoadMore()"></app-products> -->

  template: `<app-products [productId]="productIdCategory" [products]="products" (loadMoreClicked)="onLoadMore()"></app-products>`, 
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  limit = 10;
  offset = 0;
  categoryId: string | null = null;
  products: Product[] = [];
  productIdCategory: string | null = null;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,

  ){
    
  }

  ngOnInit(): void{
    this.route.paramMap
    .pipe(
      switchMap(params => {

      this.categoryId = params.get('id');
      if(this.categoryId){
        return this.productsService.getByCategory(this.categoryId, this.limit, this.offset)
      }
      return [];
      })
    )
    .subscribe(data => {
      this.products = data
    });

    this.route.queryParamMap.subscribe(params => {
      const id = params.get('product');
      
      this.productIdCategory = id;
      console.log('PADRE: productIdCategory =', this.productIdCategory); // 👈 importante
    });
  }

  onLoadMore() {
    this.productsService.getAll(this.limit, this.offset).subscribe((data) => {
      this.products = this.products.concat(data);
      this.offset += this.limit;
    });
  }
  
}
