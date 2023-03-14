class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
    constructor(z: T, add: (x: T, y: T) => T) {
        this.zeroValue = z;
        this.add = add
    }
}
// 泛型类指的是实例部分的类型，所以类的静态属性不能使用这个泛型类型。
let myGenericNumber = new GenericNumber<number>(0, function (x, y) { return x + y; });