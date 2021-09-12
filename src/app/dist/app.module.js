"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var slider_component_1 = require("./home/slider/slider.component");
var footer_component_1 = require("./home/footer/footer.component");
var order_component_1 = require("./profile/order/order.component");
var search_resualt_component_1 = require("./search/search-resualt/search-resualt.component");
var search_form_component_1 = require("./search/search-form/search-form.component");
var search_component_1 = require("./search/search.component");
var check_out_component_1 = require("./check-out/check-out.component");
var product_details_component_1 = require("./product/product-single/product-details/product-details.component");
var cart_product_component_1 = require("./cart/cart-products/cart-product.component");
var cart_component_1 = require("./cart/cart.component");
var profile_data_component_1 = require("./profile/profile-data/profile-data.component");
var http_1 = require("@angular/common/http");
var profile_component_1 = require("./profile/profile.component");
var home_component_1 = require("./home/home.component");
var mobiles_component_1 = require("./product/mobiles/mobiles.component");
var product_component_1 = require("./product/product.component");
var signup_component_1 = require("./auth/signup/signup.component");
var signin_component_1 = require("./auth/signin/signin.component");
var navbar_component_1 = require("./navbar/navbar.component");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_2 = require("@angular/common/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var product_single_component_1 = require("./product/product-single/product-single.component");
var comment_component_1 = require("./product/product-single/comments/comment.component");
var auth_interceptor_service_1 = require("./auth/auth-interceptor.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                navbar_component_1.NavbarComponent,
                signin_component_1.SigninComponent,
                signup_component_1.SignupComponent,
                home_component_1.HomeComponent,
                product_component_1.ProductComponent,
                mobiles_component_1.ProductMobileComponent,
                product_single_component_1.SingleProductComponent,
                comment_component_1.ProductCommentsComponent,
                product_details_component_1.ProductDetailsComponent,
                profile_component_1.ProfileComponent,
                profile_data_component_1.ProfileDataComponent,
                cart_component_1.CartComponent,
                cart_product_component_1.CarProductsComponent,
                check_out_component_1.CheckOutComponent,
                search_component_1.SearchComponent,
                search_form_component_1.SearchFormComponent,
                search_resualt_component_1.SearchResualtComponent,
                order_component_1.OrderComponent,
                footer_component_1.FooterComponent,
                slider_component_1.SliderComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_2.HttpClientModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                app_routing_module_1.AppRoutingModule,
            ],
            providers: [
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: auth_interceptor_service_1.AuthInterceptor,
                    multi: true
                },
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
