"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CarProductsComponent = void 0;
var core_1 = require("@angular/core");
var CarProductsComponent = /** @class */ (function () {
    function CarProductsComponent(cartService, router) {
        this.cartService = cartService;
        this.router = router;
        this.cart = null;
        this.productDeleted = false;
    }
    CarProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _a;
        (_a = this.cartService.getCart()) === null || _a === void 0 ? void 0 : _a.subscribe(function (response) {
            var cart = response.cart;
            _this.cart = cart;
            _this.cartService.initCart(_this.cart);
            console.log(_this.cart);
        });
        this.cartService.getUpdatedCart().subscribe(function (cart) {
            _this.cart = cart;
        });
    };
    CarProductsComponent.prototype.removeProduct = function (id, price, discount) {
        var _this = this;
        var confirm = window.confirm('product will removed !');
        if (confirm) {
            this.cartService.removeProduct(id, price, discount);
            this.productDeleted = true;
            setTimeout(function () {
                _this.productDeleted = false;
            }, 2000);
        }
    };
    CarProductsComponent.prototype.calcPrice = function (price, discount) {
        return price - price * (discount / 100);
    };
    CarProductsComponent.prototype.onCheckOut = function () {
        var _a;
        var price = (_a = this.cart) === null || _a === void 0 ? void 0 : _a.price;
        this.router.navigate(['/user/check-out'], {
            queryParams: { price: price }
        });
    };
    CarProductsComponent = __decorate([
        core_1.Component({
            selector: 'app-cart-products',
            templateUrl: './cart-product.component.html',
            styleUrls: ['./cart-product.component.css']
        })
    ], CarProductsComponent);
    return CarProductsComponent;
}());
exports.CarProductsComponent = CarProductsComponent;
