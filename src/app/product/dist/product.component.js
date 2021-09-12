"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductComponent = void 0;
var core_1 = require("@angular/core");
var ProductComponent = /** @class */ (function () {
    function ProductComponent(cartService) {
        this.cartService = cartService;
        this.productAdded = new core_1.EventEmitter();
        this.hiddeBtns = false;
        this.product = {
            _id: '',
            category: '',
            brand: '',
            images: [],
            describtion: '',
            properties: {
                color: '',
                size: '',
                storage: '',
                ram: '',
                processor: '',
                battery: ''
            },
            price: 0,
            discount: 0,
            count: 0,
            model: ''
        };
    }
    ProductComponent.prototype.ngOnInit = function () {
        console.log('fired ...');
    };
    ProductComponent.prototype.salePrice = function (price, discount) {
        return price - price * (discount / 100);
    };
    ProductComponent.prototype.addProduct = function (id) {
        this.cartService.addProduct(id);
        this.productAdded.emit(true);
    };
    __decorate([
        core_1.Output()
    ], ProductComponent.prototype, "productAdded");
    __decorate([
        core_1.Input()
    ], ProductComponent.prototype, "hiddeBtns");
    __decorate([
        core_1.Input()
    ], ProductComponent.prototype, "product");
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'app-product',
            templateUrl: './product.component.html',
            styleUrls: ['./product.component.css']
        })
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
