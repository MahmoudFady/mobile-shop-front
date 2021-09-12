"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.urlBase = 'http://localhost:3000/';
        this.authErrorMsg = new rxjs_1.Subject();
        this.isAuth = new rxjs_1.Subject();
    }
    AuthService.prototype.removeItem = function (key) {
        localStorage.removeItem(key);
    };
    AuthService.prototype.setItem = function (key, token) {
        localStorage.setItem(key, token);
    };
    AuthService.prototype.setUpAuthSetting = function (token, userId) {
        this.authErrorMsg.next(null);
        this.isAuth.next(true);
        this.setItem('token', token);
        this.setItem('userId', userId);
        this.router.navigate(['/user/profile']);
    };
    AuthService.prototype.getToken = function () {
        var token = localStorage.getItem('token')
            ? localStorage.getItem('token')
            : null;
        return token;
    };
    AuthService.prototype.getUserId = function () {
        return localStorage.getItem('userId');
    };
    AuthService.prototype.signin = function (user) {
        var _this = this;
        var email = user.email, password = user.password;
        this.http
            .post(this.urlBase + 'user/signin', {
            email: email,
            password: password
        })
            .subscribe(function (response) {
            _this.setUpAuthSetting(response.token, response.user._id);
        }, function (error) {
            _this.authErrorMsg.next('email or password is wrong');
            _this.isAuth.next(false);
        });
    };
    AuthService.prototype.siginup = function (user) {
        var _this = this;
        var name = user.name, email = user.email, phone = user.phone, address = user.address, password = user.password;
        var country = address.country, state = address.state, city = address.city;
        this.http
            .post(this.urlBase + 'user/signup', {
            name: name,
            email: email,
            phone: phone,
            country: country,
            state: state,
            city: city,
            password: password
        })
            .subscribe(function (response) {
            _this.setUpAuthSetting(response.token, response.user._id);
        }, function (error) {
            _this.authErrorMsg.next('email already registered');
            _this.isAuth.next(false);
        });
    };
    AuthService.prototype.logout = function () {
        this.isAuth.next(false);
        this.removeItem('token');
        this.removeItem('userId');
    };
    AuthService.prototype.getAuthErrorMsg = function () {
        return this.authErrorMsg.asObservable();
    };
    AuthService.prototype.getAuth = function () {
        return this.isAuth.asObservable();
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
