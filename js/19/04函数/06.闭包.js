"use strict";
function fib() {
    let init = 0;
    let next = 1;
    return function f() {
        let current = init;
        init = next;
        next = current + init;
        return current;
    };
}

let f = fib();

for (let i = 0; i < 10; i++) {
    console.log(f());
}


