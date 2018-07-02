"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Auth = (function () {
    function Auth(_a) {
        var clientID = _a.clientID, _b = _a.redirectURI, redirectURI = _b === void 0 ? window.location.origin : _b, _c = _a.scope, scope = _c === void 0 ? 'profile' : _c;
        this.clientID = clientID;
        this.redirectURI = redirectURI;
        this.scope = scope;
    }
    Auth.getProviderTokenFromURL = function (key) {
        var tokenRegex = new RegExp(key + "=([^&]*)");
        var matched = window.location.hash.match(tokenRegex);
        if (!matched) {
            throw new Error("Token with #" + key + " key, was not found in the URL");
        }
        return matched.pop();
    };
    Auth.prototype.redirectToOAuthProvider = function () {
        window.location.href = this.constructOAuthEndpoint();
    };
    return Auth;
}());
exports.default = Auth;
//# sourceMappingURL=Auth.js.map