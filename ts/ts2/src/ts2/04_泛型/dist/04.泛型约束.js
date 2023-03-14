// function loggingIdentity<T>(arg: T): T {
//     // 如何让改参数一定要有改属性呢？
//     console.log(arg.length);  // Error: T doesn't have .length
//     return arg;
// }
// 2. 在改函数的泛型中约束使用该函数的泛型必须拥有该属性 换算为 也就是必须实现该接口
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
// 测试 ： 注意 在ts中 接口起到的是约束作用 而不是代表某某一象征
var ssr = ['1', '2'];
console.log(loggingIdentity(ssr));
