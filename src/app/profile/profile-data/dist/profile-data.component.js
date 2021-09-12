"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProfileDataComponent = void 0;
var core_1 = require("@angular/core");
var ProfileDataComponent = /** @class */ (function () {
    function ProfileDataComponent(authService, profileService) {
        this.authService = authService;
        this.profileService = profileService;
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
        this.userId = null;
    }
    ProfileDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.authService.getUserId();
        this.profileService
            .getUserById(this.userId)
            .subscribe(function (response) {
            _this.user = response.user;
        });
    };
    ProfileDataComponent = __decorate([
        core_1.Component({
            selector: 'app-profile-data',
            templateUrl: './profile-data.component.html',
            styleUrls: ['./profile-data.component.css']
        })
    ], ProfileDataComponent);
    return ProfileDataComponent;
}());
exports.ProfileDataComponent = ProfileDataComponent;
