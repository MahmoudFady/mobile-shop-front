import { CartService } from './../cart/cart.service';
import { AuthService } from './../auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  productCountInCart: number = 0;
  isAuth = false;
  constructor(
    private authService: AuthService,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    this.isAuth = this.authService.getToken() ? true : false;
    this.authService.getAuth().subscribe((auth) => {
      this.isAuth = auth;
    });

    this.cartService.getCartProductCount().subscribe(this.cartSetup());
    this.cartService.getUpdatedCartProductCount().subscribe((count) => {
      this.productCountInCart = count;
      this.cartService.setCartProductCount(this.productCountInCart);
    });
  }
  cartSetup() {
    return (cart: any) => {
      this.productCountInCart = cart.productCount;
      this.cartService.setCartProductCount(this.productCountInCart);
    };
  }
  logout() {
    this.authService.logout();
    this.cartService.getCartProductCountForunAuth().subscribe(this.cartSetup());
  }
}
