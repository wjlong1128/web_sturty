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
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { };
    return Button;
}(Control));
var TextBox = /** @class */ (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextBox.prototype.select = function () { };
    return TextBox;
}(Control));
// 错误：“Image”类型缺少“state”属性。
// class Image implements SelectableControl {
var Images = /** @class */ (function (_super) {
    __extends(Images, _super);
    function Images() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Images.prototype.select = function () { };
    return Images;
}(Control));
var Locations = /** @class */ (function () {
    function Locations() {
    }
    return Locations;
}());
/*
在上面的例子里，SelectableControl包含了Control的所有成员，
包括私有成员state。
因为 state是私有成员，
所以只能够是Control的子类们才能实现SelectableControl接口。

因为只有 Control的子类才能够拥有一个声明于Control的私有成员state，
这对私有成员的兼容性是必需的。

在Control类内部，是允许通过SelectableControl的实例来访问私有成员state的。
实际上， SelectableControl接口和拥有select方法的Control类是一样的。
Button和TextBox类是SelectableControl的子类
（因为它们都继承自Control并有select方法），
但Image和Location类并不是这样的。
*/ 
