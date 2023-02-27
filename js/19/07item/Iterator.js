// function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
//     for (let i = start; i < end; i+= step) {
//         yield i
//     }
// }


// let iter = makeRangeIterator(0,10)

// iter.next();
// iter.next();
// iter.next();
// console.log(iter.constructor); // Function [GeneratorFunction] {}
// console.log(Array); // Function: Array
// console.log(iter.next());

function* Couter(array) {
    if (!Array.isArray(array)) {
        throw 'No Array'
    }
    for(let i of array){
        let r = yield i 
        if(r){
            console.log('接收到',r);
        }
    }
}

const couter = Couter([0,0,0,0])

console.log(couter.next());
console.log(couter.next());
console.log(couter.next(10).value);

