"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SingleProductComponent = void 0;
var core_1 = require("@angular/core");
var SingleProductComponent = /** @class */ (function () {
    function SingleProductComponent(route, productService) {
        this.route = route;
        this.productService = productService;
        this.productId = '';
        this.product = {
            _id: '',
            category: '',
            brand: '',
            model: '',
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
            comments: []
        };
    }
    SingleProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.productId = params['productId'];
        });
        this.productService.getProductById(this.productId).subscribe(function (response) {
            _this.product = response.product;
            console.log(_this.product.comments);
        });
    };
    SingleProductComponent = __decorate([
        core_1.Component({
            selector: 'app-single-product',
            templateUrl: './product-single.component.html',
            styleUrls: ['./product-single.component.css']
        })
    ], SingleProductComponent);
    return SingleProductComponent;
}());
exports.SingleProductComponent = SingleProductComponent;
