"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CartService = void 0;
var rxjs_1 = require("rxjs");
var core_1 = require("@angular/core");
var CartService = /** @class */ (function () {
    function CartService(authService, http) {
        this.authService = authService;
        this.http = http;
        this.urlBase = 'http://localhost:3000/';
        this.cartProductCount = 0;
        this.updatedCartproductCount = new rxjs_1.Subject();
        this.cart = {
            products: [],
            productCount: 0,
            price: 0
        };
        this.updatedCart = new rxjs_1.Subject();
    }
    CartService.prototype.getSavedCart = function () {
        var cart = localStorage.getItem('cart');
        return cart;
    };
    CartService.prototype.getCartForAuthUser = function () {
        var userId = this.authService.getUserId();
        return this.http.get(this.urlBase + 'cart/' + userId);
    };
    CartService.prototype.getCartForUnAuthUser = function () {
        var _a;
        var cart = (_a = this.getSavedCart()) === null || _a === void 0 ? void 0 : _a.split(',');
        if (cart) {
            return this.http.post(this.urlBase + 'cart/unAuth', {
                cartProducts: cart
            });
        }
        return null;
    };
    CartService.prototype.removeProductByUnAuth = function (id) {
        var cart = this.getSavedCart().split(',');
        if (cart.length > 1) {
            var index = cart.findIndex(function (pId) { return pId == id; });
            cart.splice(index, 1);
            localStorage.setItem('cart', cart);
        }
        else {
            localStorage.removeItem('cart');
        }
    };
    CartService.prototype.removeProductByAuth = function (id) {
        this.http
            .patch(this.urlBase + 'cart/' + id, {})
            .subscribe(function (response) { });
    };
    CartService.prototype.getCart = function () {
        var token = this.authService.getToken();
        return token ? this.getCartForAuthUser() : this.getCartForUnAuthUser();
    };
    CartService.prototype.initCart = function (cart) {
        this.cart = cart;
    };
    CartService.prototype.removeProduct = function (id, price, discount) {
        var _a;
        if (((_a = this.cart) === null || _a === void 0 ? void 0 : _a.products.length) > 1 && this.cart) {
            var totalPrice = price - price * (discount / 100);
            var productIndex = this.cart.products.findIndex(function (p) {
                return id == p._id;
            });
            this.cart.products.splice(productIndex, 1);
            this.cart.productCount = this.cart.productCount - 1;
            this.cart.price = this.cart.price - totalPrice;
            this.updatedCart.next(this.cart);
            this.updatedCartproductCount.next(this.cart.productCount);
        }
        else {
            this.cart = null;
            this.updatedCart.next(this.cart);
            this.updatedCartproductCount.next(0);
        }
        this.authService.getToken()
            ? this.removeProductByAuth(id)
            : this.removeProductByUnAuth(id);
    };
    CartService.prototype.addProductByAuth = function (id) {
        this.http.post(this.urlBase + 'cart/' + id, {}).subscribe(function (response) { });
    };
    CartService.prototype.addProductByUnAuth = function (id) {
        var cart = this.getSavedCart() ? this.getSavedCart().split(',') : [];
        cart.push(id);
        localStorage.setItem('cart', cart);
    };
    CartService.prototype.addProduct = function (id) {
        var token = this.authService.getToken();
        token ? this.addProductByAuth(id) : this.addProductByUnAuth(id);
        this.updatedCartproductCount.next(this.cartProductCount + 1);
    };
    CartService.prototype.getCartProductCountForAuth = function () {
        return this.http.get(this.urlBase + 'cart/productCount');
    };
    CartService.prototype.getCartProductCountForunAuth = function () {
        var productCount = this.getSavedCart()
            ? this.getSavedCart().split(',').length
            : 0;
        return new rxjs_1.Observable(function (observer) {
            observer.next({ productCount: productCount });
        });
    };
    CartService.prototype.getCartProductCount = function () {
        var token = this.authService.getToken();
        return token
            ? this.getCartProductCountForAuth()
            : this.getCartProductCountForunAuth();
    };
    CartService.prototype.getCatProductLength = function () {
        var _this = this;
        this.getCartProductCount().subscribe(function (cart) {
            _this.setCartProductCount(cart.productCount);
            _this.updatedCartproductCount.next(_this.cartProductCount);
        });
    };
    CartService.prototype.setCartProductCount = function (count) {
        this.cartProductCount = count;
    };
    CartService.prototype.getUpdatedCart = function () {
        return this.updatedCart.asObservable();
    };
    CartService.prototype.getUpdatedCartProductCount = function () {
        return this.updatedCartproductCount.asObservable();
    };
    CartService.prototype.getCartCount = function () {
        return this.cartProductCount;
    };
    CartService = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], CartService);
    return CartService;
}());
exports.CartService = CartService;
