//  它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。
interface SearchFunc {
    (source: string, subString: string): boolean;
}

// 我们可以像使用其它接口一样使用这个函数类型的接口
let mySearch: SearchFunc = (src: string, subString: string) => {
    return src === subString
}
// 或者根据接口自动类型推断
let mySearch2: SearchFunc = (src, target) => src == target

console.log(mySearch('a', 'a'));





