interface SquareConfig {
    color?: string;
    width?: number;
    [myPropName:string]:any
}

// 这段代码并不安全
function createSquare(config: SquareConfig) {
}
// colour 属性不符合定义 但是 使用as判定可以绕开检查
// let mySquare = createSquare({ colour: "red", width: 100 } as SquareConfig);
// 第二种绕开检查的方式
// let cache = { colour: "red", width: 100 }
// createSquare(cache)

// 最佳的方式是能够添加一个字符串索引签名，前提是你能够确定这个对象可能具有某些做为特殊用途使用的额外属性。 
