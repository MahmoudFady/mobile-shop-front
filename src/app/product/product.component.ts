import { CartService } from './../cart/cart.service';
import { ProductI } from './../shared/models/product.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Output() productAdded = new EventEmitter<boolean>();
  @Input() hiddeBtns = false;
  @Input() product: ProductI = {
    _id: '',
    category: '',
    brand: '',
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
    model: '',
  };
  ngOnInit(): void {
    console.log('fired ...');
  }
  constructor(private cartService: CartService) {}
  salePrice(price: number, discount: number) {
    return price - price * (discount / 100);
  }
  addProduct(id: string) {
    this.cartService.addProduct(id);
    this.productAdded.emit(true);
  }
}
