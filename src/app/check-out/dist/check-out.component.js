"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CheckOutComponent = void 0;
var core_1 = require("@angular/core");
var CheckOutComponent = /** @class */ (function () {
    function CheckOutComponent(route, profileService, authService) {
        this.route = route;
        this.profileService = profileService;
        this.authService = authService;
        this.userId = null;
        this.price = 0;
        this.user = {
            _id: '',
            name: '',
            image: '',
            email: '',
            phone: 0,
            address: {
                country: '',
                state: '',
                city: ''
            }
        };
    }
    CheckOutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (p) {
            _this.price = p.price;
        });
        var userId = this.authService.getUserId();
        if (userId) {
            this.profileService.getUserById(userId).subscribe(function (response) {
                _this.user = response.user;
            });
        }
    };
    CheckOutComponent = __decorate([
        core_1.Component({
            selector: 'app-check-out',
            templateUrl: './check-out.component.html',
            styleUrls: ['./check-out.component.css']
        })
    ], CheckOutComponent);
    return CheckOutComponent;
}());
exports.CheckOutComponent = CheckOutComponent;
