var MyNameSpace;
(function (MyNameSpace) {
    var Emb;
    (function (Emb) {
        Emb.str = '123';
    })(Emb = MyNameSpace.Emb || (MyNameSpace.Emb = {}));
})(MyNameSpace || (MyNameSpace = {}));
var inter = { name: 'zhangsan' };
console.log(MyNameSpace.Emb.str);
