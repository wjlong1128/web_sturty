// 接口函数泛型
interface GenericIdentityFn {
    <T>(arg: T): T
}

let g: GenericIdentityFn = <T>(arg: T) => arg

console.log(g<string>('zhangsan'));
console.log(g(1));