import { Subject, Observable, Observer } from 'rxjs';
import { ProductI } from './../shared/models/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
interface CartI {
  products: ProductI[];
  productCount: number;
  price: number;
}
@Injectable({ providedIn: 'root' })
export class CartService {
  readonly urlBase = 'http://localhost:3000/';
  cartProductCount = 0;
  updatedCartproductCount = new Subject<number>();
  private cart: CartI | null = {
    products: [],
    productCount: 0,
    price: 0,
  };
  updatedCart = new Subject<CartI | null>();
  constructor(private authService: AuthService, private http: HttpClient) {}

  private getSavedCart() {
    const cart = <string>localStorage.getItem('cart');
    return cart;
  }
  private getCartForAuthUser() {
    const userId = this.authService.getUserId();
    return this.http.get<{
      message: string;
      cart: CartI;
    }>(this.urlBase + 'cart/' + userId);
  }

  private getCartForUnAuthUser() {
    const cart = this.getSavedCart()?.split(',');
    if (cart) {
      return this.http.post<{
        message: string;
        cart: CartI;
      }>(this.urlBase + 'cart/unAuth', {
        cartProducts: cart,
      });
    }
    return null;
  }
  private removeProductByUnAuth(id: string) {
    const cart = this.getSavedCart().split(',');
    if (cart.length > 1) {
      const index = cart.findIndex((pId) => pId == id);
      cart.splice(index, 1);
      localStorage.setItem('cart', cart as unknown as string);
    } else {
      localStorage.removeItem('cart');
    }
  }
  private removeProductByAuth(id: string) {
    this.http
      .patch(this.urlBase + 'cart/' + id, {})
      .subscribe((response) => {});
  }
  getCart() {
    const token = this.authService.getToken();
    return token ? this.getCartForAuthUser() : this.getCartForUnAuthUser();
  }
  initCart(cart: CartI) {
    this.cart = cart;
  }

  removeProduct(id: string, price: number, discount: number) {
    if (<number>this.cart?.products.length > 1 && this.cart) {
      const totalPrice = price - price * (discount / 100);
      const productIndex = this.cart.products.findIndex((p) => {
        return id == p._id;
      });
      this.cart.products.splice(<number>productIndex, 1);
      this.cart.productCount = this.cart.productCount - 1;
      this.cart.price = this.cart.price - totalPrice;
      this.updatedCart.next(this.cart);
      this.updatedCartproductCount.next(this.cart.productCount);
    } else {
      this.cart = null;
      this.updatedCart.next(this.cart);
      this.updatedCartproductCount.next(0);
    }
    this.authService.getToken()
      ? this.removeProductByAuth(id)
      : this.removeProductByUnAuth(id);
  }
  private addProductByAuth(id: string) {
    this.http.post(this.urlBase + 'cart/' + id, {}).subscribe((response) => {});
  }
  private addProductByUnAuth(id: string) {
    const cart = this.getSavedCart() ? this.getSavedCart().split(',') : [];
    cart.push(id);
    localStorage.setItem('cart', cart as unknown as string);
  }

  addProduct(id: string) {
    const token = this.authService.getToken();
    token ? this.addProductByAuth(id) : this.addProductByUnAuth(id);
    this.updatedCartproductCount.next(this.cartProductCount + 1);
  }
  getCartProductCountForAuth() {
    return this.http.get<{ productCount: number }>(
      this.urlBase + 'cart/productCount'
    );
  }
  getCartProductCountForunAuth() {
    const productCount = this.getSavedCart()
      ? this.getSavedCart().split(',').length
      : 0;
    return new Observable((observer: Observer<{ productCount: number }>) => {
      observer.next({ productCount });
    });
  }
  getCartProductCount() {
    const token = this.authService.getToken();
    return token
      ? this.getCartProductCountForAuth()
      : this.getCartProductCountForunAuth();
  }
  getCatProductLength() {
    this.getCartProductCount().subscribe((cart) => {
      this.setCartProductCount(cart.productCount);
      this.updatedCartproductCount.next(this.cartProductCount);
    });
  }
  setCartProductCount(count: number) {
    this.cartProductCount = count;
  }
  getUpdatedCart(): Observable<CartI | null> {
    return this.updatedCart.asObservable();
  }
  getUpdatedCartProductCount(): Observable<number> {
    return this.updatedCartproductCount.asObservable();
  }
  getCartCount() {
    return this.cartProductCount;
  }
}
