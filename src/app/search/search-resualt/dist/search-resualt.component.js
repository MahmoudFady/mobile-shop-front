"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SearchResualtComponent = void 0;
var core_1 = require("@angular/core");
var SearchResualtComponent = /** @class */ (function () {
    function SearchResualtComponent(searchService) {
        this.searchService = searchService;
        this.products = [];
        this.isSearchFired = false;
    }
    SearchResualtComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchService.getProducts().subscribe(function (products) {
            _this.products = products;
            _this.isSearchFired = true;
        });
    };
    SearchResualtComponent = __decorate([
        core_1.Component({
            selector: 'app-search-resualt',
            templateUrl: './search-resualt.component.html',
            styleUrls: ['./search-resualt.component.css']
        })
    ], SearchResualtComponent);
    return SearchResualtComponent;
}());
exports.SearchResualtComponent = SearchResualtComponent;
