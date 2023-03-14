// ts中每一个参数都是必须传递的 除非 用?修饰和默认参数
let f1 = (x: number, y?: number): number => {
    if (y) {
        return x + y
    }
    return x
}

let f2 = (x:number,y:number = 5):number => x + y

console.log(f1(1));
console.log(f2(1));