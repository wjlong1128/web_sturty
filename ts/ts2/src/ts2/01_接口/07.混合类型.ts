// 在使用JavaScript第三方库的时候，可能需要像这样去完整地定义类型。
interface Counter {
    (start: number): string; // 函数接口
    interval: number; // 接口属性
    reset(): void; // 接口方法
}

// 可以这样让其混合

// 1.判定为函数
const myCounter = <Counter>(s: number) => s.toString()
myCounter.interval = 123
myCounter.reset = () => { }

console.log(myCounter);

