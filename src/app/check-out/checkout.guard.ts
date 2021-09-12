import { CartService } from './../cart/cart.service';
import { HttpClient } from '@angular/common/http';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckOutGuard implements CanActivate {
  constructor(private router: Router, private cartService: CartService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    const cartCount = this.cartService.getCartCount();
    return new Promise((resolve, reject) => {
      if (cartCount > 0) {
        resolve(true);
      } else {
        this.router.navigate(['/home']);
      }
    });
  }
}
