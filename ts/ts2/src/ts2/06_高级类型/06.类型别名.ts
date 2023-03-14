// type IString = string
// let s0:IString = 'abc'
// console.log(s0);

// 别名一个方法类型
type MyFunc = (str: string) => string

function myget(fn: MyFunc, str: string) {
    return fn(str)
}

let strstr = myget((str: string) => str + str, 'str')

console.log(strstr);

type Alias = { num: number }
interface Interface {
    num: number;
}
declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;
// 另一个重要区别是类型别名不能被 extends和 implements（自己也不能 extends和 implements其它类型）。 
// 因为 软件中的对象应该对于扩展是开放的，但是对于修改是封闭的，你应该尽量去使用接口代替类型别名。

// 如果无法通过接口来描述一个类型并且需要使用联合类型或元组类型，
// 这时通常会使用类型别名。


/*
字符串字面量类型允许你指定字符串必须的固定值。
在实际应用中，字符串字面量类型可以与联合类型，类型保护和类型别名很好的配合。
通过结合使用这些特性，你可以实现类似枚举类型的字符串。
*/
type Easing = "ease-in" | "ease-out" | "ease-in-out";
function set(eas: Easing) {
    console.log(eas);
}
set('ease-in-out')


// 数字型字面量
function rollDie(): 1 | 2 | 3 {
    return 1
}

console.log(rollDie());
