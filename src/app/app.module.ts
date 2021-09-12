import { SliderComponent } from './home/slider/slider.component';
import { FooterComponent } from './home/footer/footer.component';
import { OrderComponent } from './profile/order/order.component';
import { SearchResualtComponent } from './search/search-resualt/search-resualt.component';
import { SearchFormComponent } from './search/search-form/search-form.component';
import { SearchComponent } from './search/search.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ProductDetailsComponent } from './product/product-single/product-details/product-details.component';
import { CarProductsComponent } from './cart/cart-products/cart-product.component';
import { CartComponent } from './cart/cart.component';
import { ProfileDataComponent } from './profile/profile-data/profile-data.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ProductMobileComponent } from './product/mobiles/mobiles.component';
import { ProductComponent } from './product/product.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingleProductComponent } from './product/product-single/product-single.component';
import { ProductCommentsComponent } from './product/product-single/comments/comment.component';
import { AuthInterceptor } from './auth/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    ProductComponent,
    ProductMobileComponent,
    SingleProductComponent,
    ProductCommentsComponent,
    ProductDetailsComponent,
    ProfileComponent,
    ProfileDataComponent,
    CartComponent,
    CarProductsComponent,
    CheckOutComponent,
    SearchComponent,
    SearchFormComponent,
    SearchResualtComponent,
    OrderComponent,
    FooterComponent,
    SliderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
