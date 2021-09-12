import { ProductService } from './../product.service';
import { ProductI } from './../../shared/models/product.model';
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Comment } from '@angular/compiler';

@Component({
  selector: 'app-single-product',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.css'],
})
export class SingleProductComponent {
  productId = '';
  product: ProductI = {
    _id: '',
    category: '',
    brand: '',
    model: '',
    images: [],
    describtion: '',
    properties: {
      color: '',
      size: '',
      storage: '',
      ram: '',
      processor: '',
      battery: '',
    },
    price: 0,
    discount: 0,
    count: 0,
    comments: [],
  };
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.productId = params['productId'];
    });
    this.productService.getProductById(this.productId).subscribe((response) => {
      this.product = response.product;
      console.log(this.product.comments);
    });
  }
}
