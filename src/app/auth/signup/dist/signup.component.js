"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SignupComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService) {
        this.authService = authService;
        this.signupErrMsg = null;
        this.loading = false;
        this.signupData = new forms_1.FormGroup({
            name: new forms_1.FormControl(null, [forms_1.Validators.required]),
            email: new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.email]),
            phone: new forms_1.FormControl(null, [forms_1.Validators.required]),
            address: new forms_1.FormGroup({
                country: new forms_1.FormControl(null, [forms_1.Validators.required]),
                state: new forms_1.FormControl(null, [forms_1.Validators.required]),
                city: new forms_1.FormControl(null, [forms_1.Validators.required])
            }),
            password: new forms_1.FormControl(null, [forms_1.Validators.required])
        });
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuthErrorMsg().subscribe(function (msg) {
            _this.signupErrMsg = msg;
            _this.loading = false;
        });
    };
    SignupComponent.prototype.signup = function () {
        var _a;
        this.loading = true;
        this.authService.siginup(this.signupData.value);
        (_a = this.signupData.get('email')) === null || _a === void 0 ? void 0 : _a.patchValue(null);
    };
    Object.defineProperty(SignupComponent.prototype, "f", {
        get: function () {
            return this.signupData.controls;
        },
        enumerable: false,
        configurable: true
    });
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['../signin/signin.component.css', './signup.component.css']
        })
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
