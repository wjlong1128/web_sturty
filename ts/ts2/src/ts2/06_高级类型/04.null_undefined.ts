// let msg:string = 'a'

// msg = undefined error
// msg = null error

let msgs: string | null = null

// 使用了 --strictNullChecks，可选参数会被自动地加上 | undefined
function get(msg?: string) { }
get(undefined)



class Ca {
    a: number = 10;
    b?: number;
}
let ca = new Ca();
ca.a = 12;
// ca.a = undefined; // error, 'undefined' is not assignable to 'number'
ca.b = 13;
ca.b = undefined; // ok
// ca.b = null; // error, 'null' is not assignable to 'number | undefined'