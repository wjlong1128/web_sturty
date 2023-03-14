function fn1(v1: string, v2: number): string {
    return v1 + v2
}

const fn2 = (v1: number, v2: number): number => v1 + v2

console.log(fn2(1, 2));

// 可选参数
const fn3 = (v1: number, v2: number, v3?: string): number => {
    if(v3){
        console.log(v3);
    }
    return v1 + v2
}

console.log(fn3(1,2));
console.log(fn3(1,2,'执行计算'));


// void 和 null 、 undefined 不可以混用，如果的函数返回值类型是 null ，那么是真的需要 return 一个 null 值：

function fn4():void{ // 不写和写void返回值都为undefined

}

function fn5():null{
    return null
}

console.log(fn4());

