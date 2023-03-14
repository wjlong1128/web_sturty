var f3 = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var str = '';
    args.forEach(function (s) { str += s; });
    return str;
};
var ree = f3('a', 'b', 'c', '1');
console.log(ree);
