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
function create(c) {
    return new c();
}
var BeeKeeper = /** @class */ (function () {
    function BeeKeeper() {
        this.hasMask = true;
    }
    return BeeKeeper;
}());
var Animals = /** @class */ (function () {
    function Animals(numLegs) {
        this.numLegs = numLegs;
    }
    return Animals;
}());
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        var _this = _super.call(this, 1) || this;
        _this.keeper = create(BeeKeeper);
        return _this;
    }
    return Bee;
}(Animals));
function createInstance(c) {
    return new c();
}
var bee = createInstance(Bee).keeper.hasMask; // typechecks!
console.log(bee);
