function max(){
    let max = 0;
    Array.prototype.forEach.call(arguments,item=>{
        if (item > max) {
            max = item
        }
    })
    return max
}

let result = max(23,9,79,9)
console.log(result);

