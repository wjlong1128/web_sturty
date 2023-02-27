// 默认参数
const area = (a, b = 1) =>{
    return a * b
}

console.log(area(4));
console.log(area(4,5));

// 不定参数
const sum = (one,...args) => {
    args.forEach(item=>{
        one += item
    })
    return one
}

let result = sum('1',2,3,4)
console.log(result);

