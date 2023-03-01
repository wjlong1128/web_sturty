const iter = {}

iter[Symbol.iterator] = function*(){
    yield 'a'
    yield 'b'
    yield* [1,2,3]
    yield 'c'
    yield 'd'
}

for (const item of iter) {
   console.log(item); 
}