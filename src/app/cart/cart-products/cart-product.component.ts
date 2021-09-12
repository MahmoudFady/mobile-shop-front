import { Router } from '@angular/router';
import { CartService } from './../cart.service';
import { ProductI } from './../../shared/models/product.model';
import { Component } from '@angular/core';
interface CartI {
  products: ProductI[];
  productCount: number;
  price: number;
}
@Component({
  selector: 'app-cart-products',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css'],
})
export class CarProductsComponent {
  cart: CartI | null = null;
  productDeleted = false;
  constructor(private cartService: CartService, private router: Router) {}
  ngOnInit(): void {
    this.cartService.getCart()?.subscribe((response) => {
      const { cart } = response;
      this.cart = cart;
      this.cartService.initCart(this.cart);
      console.log(this.cart);
    });
    this.cartService.getUpdatedCart().subscribe((cart) => {
      this.cart = cart;
    });
  }

  removeProduct(id: string, price: number, discount: number) {
    const confirm = window.confirm('product will removed !');
    if (confirm) {
      this.cartService.removeProduct(id, price, discount);
      this.productDeleted = true;
      setTimeout(() => {
        this.productDeleted = false;
      }, 2000);
    }
  }
  calcPrice(price: number, discount: number): number {
    return price - price * (discount / 100);
  }
  onCheckOut() {
    const price = this.cart?.price;
    this.router.navigate(['/user/check-out'], {
      queryParams: { price: price },
    });
  }
}
