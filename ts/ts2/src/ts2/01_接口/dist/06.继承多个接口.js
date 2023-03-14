var SquareImpl = /** @class */ (function () {
    function SquareImpl(c, p) {
        this.color = c;
        this.penWidth = p;
    }
    return SquareImpl;
}());
var squareImpl = SquareImpl;
// 这里是判定类型的第二种写法
var square = {};
square.color = '#fff';
square.penWidth = 1000;
console.log(square);
