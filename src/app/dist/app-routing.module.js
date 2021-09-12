"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var checkout_guard_1 = require("./check-out/checkout.guard");
var check_out_component_1 = require("./check-out/check-out.component");
var cart_component_1 = require("./cart/cart.component");
var unAuth_guard_1 = require("./auth/unAuth.guard");
var profile_component_1 = require("./profile/profile.component");
var product_single_component_1 = require("./product/product-single/product-single.component");
var mobiles_component_1 = require("./product/mobiles/mobiles.component");
var home_component_1 = require("./home/home.component");
var signup_component_1 = require("./auth/signup/signup.component");
var signin_component_1 = require("./auth/signin/signin.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_guard_1 = require("./auth/auth.guard");
var search_component_1 = require("./search/search.component");
var routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: home_component_1.HomeComponent },
    {
        path: 'search',
        component: search_component_1.SearchComponent
    },
    {
        path: 'user',
        children: [
            {
                path: 'profile',
                component: profile_component_1.ProfileComponent,
                canActivate: [auth_guard_1.AuthGuard]
            },
            {
                path: 'cart',
                component: cart_component_1.CartComponent
            },
            {
                path: 'check-out',
                canActivate: [checkout_guard_1.CheckOutGuard],
                component: check_out_component_1.CheckOutComponent
            },
        ]
    },
    {
        path: 'products',
        children: [
            {
                path: 'mobiles',
                component: mobiles_component_1.ProductMobileComponent
            },
            {
                path: ':productId',
                component: product_single_component_1.SingleProductComponent
            },
        ]
    },
    {
        path: 'auth',
        canActivate: [unAuth_guard_1.UnAuthGuard],
        children: [
            {
                path: 'signin',
                component: signin_component_1.SigninComponent
            },
            {
                path: 'signup',
                component: signup_component_1.SignupComponent
            },
        ]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
