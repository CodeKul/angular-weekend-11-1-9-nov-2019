"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Remote = /** @class */ (function () {
    function Remote() {
        this.range = 10;
        this.rfBw = 1;
    }
    return Remote;
}());
exports.Remote = Remote;
var BTRemote = /** @class */ (function (_super) {
    __extends(BTRemote, _super);
    function BTRemote() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BTRemote;
}(Remote));
exports.BTRemote = BTRemote;
var Cell = /** @class */ (function () {
    function Cell() {
    }
    return Cell;
}());
exports.Cell = Cell;
