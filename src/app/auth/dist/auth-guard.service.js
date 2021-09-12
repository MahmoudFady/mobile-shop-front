"use strict";
exports.__esModule = true;
exports.AuthGuard = void 0;
var core_1 = require("@angular/core");
core_1.Injectable({
    providedIn: 'root'
});
var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        var token = this.authService.getToken();
        return new Promise(function (resolve, reject) {
            if (!token) {
                _this.router.navigate(['/auth/signin']);
                console.log('faild');
            }
            else {
                resolve(true);
            }
        });
    };
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
