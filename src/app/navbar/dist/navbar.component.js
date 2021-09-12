"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NavbarComponent = void 0;
var core_1 = require("@angular/core");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, cartService) {
        this.authService = authService;
        this.cartService = cartService;
        this.productCountInCart = 0;
        this.isAuth = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isAuth = this.authService.getToken() ? true : false;
        this.authService.getAuth().subscribe(function (auth) {
            _this.isAuth = auth;
        });
        this.cartService.getCartProductCount().subscribe(this.cartSetup());
        this.cartService.getUpdatedCartProductCount().subscribe(function (count) {
            _this.productCountInCart = count;
            _this.cartService.setCartProductCount(_this.productCountInCart);
        });
    };
    NavbarComponent.prototype.cartSetup = function () {
        var _this = this;
        return function (cart) {
            _this.productCountInCart = cart.productCount;
            _this.cartService.setCartProductCount(_this.productCountInCart);
        };
    };
    NavbarComponent.prototype.logout = function () {
        this.authService.logout();
        this.cartService.getCartProductCountForunAuth().subscribe(this.cartSetup());
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'app-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.css']
        })
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
