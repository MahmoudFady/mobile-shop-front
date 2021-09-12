"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductCommentsComponent = void 0;
var core_1 = require("@angular/core");
var ProductCommentsComponent = /** @class */ (function () {
    function ProductCommentsComponent(route, commentService, authService) {
        this.route = route;
        this.commentService = commentService;
        this.authService = authService;
        this.isAuthenticated = false;
        this.productId = '';
        this.comments = [];
    }
    ProductCommentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isAuthenticated = this.authService.getToken() ? true : false;
        this.route.params.subscribe(function (params) {
            _this.productId = params['productId'];
        });
    };
    ProductCommentsComponent.prototype.onAddComment = function (f) {
        var _this = this;
        var content = f.value.content;
        this.commentService
            .addComment(this.productId, content)
            .subscribe(function (response) {
            var _a;
            f.reset();
            (_a = _this.comments) === null || _a === void 0 ? void 0 : _a.push(response.newComment);
        });
    };
    __decorate([
        core_1.Input()
    ], ProductCommentsComponent.prototype, "comments");
    ProductCommentsComponent = __decorate([
        core_1.Component({
            selector: 'app-product-comments',
            templateUrl: './comment.component.html',
            styleUrls: ['./comment.component.css']
        })
    ], ProductCommentsComponent);
    return ProductCommentsComponent;
}());
exports.ProductCommentsComponent = ProductCommentsComponent;
