"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CommentsService = void 0;
var rxjs_1 = require("rxjs");
var core_1 = require("@angular/core");
var CommentsService = /** @class */ (function () {
    function CommentsService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:3000/comment/';
        this.comments = [];
        this.updatedComments = new rxjs_1.Subject();
    }
    CommentsService.prototype.getProductCommentsById = function (id) { };
    CommentsService.prototype.initialComments = function (comments) {
        this.comments = comments;
        this.updatedComments.next(this.comments);
    };
    CommentsService.prototype.addComment = function (productId, content) {
        return this.http.post(this.baseUrl + productId, {
            content: content
        });
    };
    CommentsService.prototype.getUpdateComments = function () {
        return this.updatedComments.asObservable();
    };
    CommentsService = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], CommentsService);
    return CommentsService;
}());
exports.CommentsService = CommentsService;
