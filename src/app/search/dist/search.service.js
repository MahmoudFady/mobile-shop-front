"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SearchService = void 0;
var rxjs_1 = require("rxjs");
var core_1 = require("@angular/core");
var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
        this.urlBase = 'http://localhost:3000/';
        this.result = new rxjs_1.Subject();
    }
    SearchService.prototype.search = function (category, brand) {
        var _this = this;
        var url = this.urlBase + 'product/search/' + category + '/' + brand;
        this.http
            .get(url)
            .subscribe(function (response) {
            console.log(response);
            _this.result.next(response.products);
        });
    };
    SearchService.prototype.getProducts = function () {
        return this.result.asObservable();
    };
    SearchService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], SearchService);
    return SearchService;
}());
exports.SearchService = SearchService;
