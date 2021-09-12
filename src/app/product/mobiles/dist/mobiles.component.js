"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductMobileComponent = void 0;
var core_1 = require("@angular/core");
var ProductMobileComponent = /** @class */ (function () {
    function ProductMobileComponent(productService) {
        this.productService = productService;
        this.productAdded = false;
        this.products = [];
    }
    ProductMobileComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('fired ...');
        this.productService
            .getProductsByCategory('mobile')
            .subscribe(function (response) {
            console.log(response);
            _this.products = response.products;
        });
    };
    ProductMobileComponent.prototype.onProductAdded = function (evt) {
        var _this = this;
        this.productAdded = true;
        setTimeout(function () {
            _this.productAdded = false;
        }, 2000);
    };
    ProductMobileComponent = __decorate([
        core_1.Component({
            selector: 'app-product-mobile',
            templateUrl: './mobiles.component.html',
            styleUrls: ['./mobiles.component.css']
        })
    ], ProductMobileComponent);
    return ProductMobileComponent;
}());
exports.ProductMobileComponent = ProductMobileComponent;
