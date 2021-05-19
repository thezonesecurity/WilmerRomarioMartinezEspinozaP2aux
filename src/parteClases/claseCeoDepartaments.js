"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var claseDepartaments_1 = require("./claseDepartaments");
var CEOdepartament = /** @class */ (function (_super) {
    __extends(CEOdepartament, _super);
    function CEOdepartament(ad, i, o) {
        var _this = _super.call(this, i, o) || this;
        _this.admins = ad;
        return _this;
    }
    return CEOdepartament;
}(claseDepartaments_1["default"]));
var ceodepartament = new CEOdepartament("author", 1, "jaun");
var ceodepartament1 = new CEOdepartament("author", 2, "diana");
var ceodepartament2 = new CEOdepartament("author", 3, "lucas");
console.log(ceodepartament.admins);
