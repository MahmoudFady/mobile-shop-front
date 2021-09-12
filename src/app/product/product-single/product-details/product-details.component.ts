import { Component, Input } from '@angular/core';
import { ProductI } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  @Input() product: ProductI = {
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
  };
  ngOnInit() {}
}
