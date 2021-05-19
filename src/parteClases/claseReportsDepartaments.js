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
//claseReportsDepartaments
var claseDepartaments_1 = require("../parteClases/claseDepartaments");
var ReportsDepartaments = /** @class */ (function (_super) {
    __extends(ReportsDepartaments, _super);
    function ReportsDepartaments(report, i, o) {
        var _this = _super.call(this, i, o) || this;
        _this.reports = report;
        return _this;
    }
    ReportsDepartaments.prototype.addReports = function (nuevo) {
        console.log(this.reports = nuevo);
        return;
    };
    return ReportsDepartaments;
}(claseDepartaments_1["default"]));
var reportsDepartaments = new ReportsDepartaments("reporte1", 1, "juan perez");
//console.log(reportsDepartaments);
reportsDepartaments.addReports("reporte2");
reportsDepartaments.addReports("reporte3");
reportsDepartaments.addReports("reporte4");
console.log(reportsDepartaments);
