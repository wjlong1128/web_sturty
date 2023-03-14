// 类与对象字面量和接口差不多，但有一点不同：
//      类有静态部分和实例部分的类型。 比较两个类类型的对象时，
//      只有实例的成员会被比较。 
// 静态成员和构造函数不在比较的范围内
class Animals2 {
    feet: number = 100;
    // 构造是静态部分
    constructor(name: string, numFeet: number) { }
}

class Size {
    feet: number = 100;
    constructor(numFeet: number) { }
}

let a1: Animals2 = new Animals2('', 1);
let s2: Size = new Size(100);

a1 = s2;  // OK
s2 = a1;  // OK

/**
 类的私有成员和受保护成员会影响兼容性。 
 当检查类实例的兼容时，如果目标类型包含一个私有成员，
 那么源类型必须包含来自同一个类的这个私有成员。 
 同样地，这条规则也适用于包含受保护成员实例的类型检查。 
 这允许子类赋值给父类，但是不能赋值给其它有同样类型的类。
 */