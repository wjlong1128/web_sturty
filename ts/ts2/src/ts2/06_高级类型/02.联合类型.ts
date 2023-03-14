interface Bird {
    fly(): void;
    layEggs(): void;
}

interface Fish {
    swim(): void;
    layEggs(): void;
}

function getSmallPet(): Fish | Bird {
    return {
        swim(): void {
            console.log('swim..');
        },
        layEggs(): void {
            console.log('layEggs...');
        }
    }
}

let pet = getSmallPet();
pet.layEggs(); // okay
// 如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员。
// pet.swim();    // errors


// 但是 我现在就想用Fish

// 方法1 类型断言
if ((<Fish>pet).swim) {
    (<Fish>pet).swim()
}

// 用户自定义的类型保护
/*
类型保护就是一些表达式，它们会在运行时检查以确保在某个作用域里的类型。 
要定义一个类型保护，我们只要简单地定义一个函数，它的返回值是一个 类型谓词：
*/
function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined
}
// 谓词为 parameterName is Type这种形式， parameterName必须是来自于当前函数签名里的一个参数名。
// 每当使用一些变量调用 isFish时，TypeScript会将变量缩减为那个具体的类型，
// 只要这个类型与变量的原始类型是兼容的。
if (isFish(pet)) {
    pet.swim()
} else {
    pet.fly() // Bird
}



function isNumber(x: any): x is number {
    return typeof x === "number";
}

function isString(x: any): x is string {
    return typeof x === "string";
}

// function padLeft(value: string, padding: string | number) {
//     if (isNumber(padding)) {
//         return Array(padding + 1).join(" ") + value;
//     }
//     if (isString(padding)) {
//         return padding + value;
//     }
//     throw new Error(`Expected string or number, got '${padding}'.`);
// }

/*
然而，必须要定义一个函数来判断类型是否是原始类型，这太痛苦了。 
幸运的是，现在我们不必将 typeof x === "number"抽象成一个函数，因为TypeScript可以将它识别为一个类型保护。 
也就是说我们可以直接在代码里检查类型了。
*/

function padLeft(value: string, padding: string | number) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}