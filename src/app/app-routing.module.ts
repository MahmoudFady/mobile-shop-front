import { CheckOutGuard } from './check-out/checkout.guard';
import { CheckOutComponent } from './check-out/check-out.component';
import { CartComponent } from './cart/cart.component';
import { UnAuthGuard } from './auth/unAuth.guard';
import { ProfileComponent } from './profile/profile.component';
import { SingleProductComponent } from './product/product-single/product-single.component';
import { ProductMobileComponent } from './product/mobiles/mobiles.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'user',
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'cart',
        component: CartComponent,
      },
      {
        path: 'check-out',
        canActivate: [CheckOutGuard],
        component: CheckOutComponent,
      },
    ],
  },
  {
    path: 'products',

    children: [
      {
        path: 'mobiles',
        component: ProductMobileComponent,
      },
      {
        path: ':productId',
        component: SingleProductComponent,
      },
    ],
  },
  {
    path: 'auth',
    canActivate: [UnAuthGuard],
    children: [
      {
        path: 'signin',
        component: SigninComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
