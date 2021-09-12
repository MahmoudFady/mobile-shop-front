import { ProductService } from '../product.service';
import { ProductI } from '../../shared/models/product.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-mobile',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css'],
})
export class ProductMobileComponent {
  productAdded = false;
  products: ProductI[] = [];
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    console.log('fired ...');

    this.productService
      .getProductsByCategory('mobile')
      .subscribe((response) => {
        console.log(response);
        this.products = response.products;
      });
  }
  onProductAdded(evt: boolean) {
    this.productAdded = true;
    setTimeout(() => {
      this.productAdded = false;
    }, 2000 );
  }
}
