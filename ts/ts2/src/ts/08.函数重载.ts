
// 这一次用了函数重载
function greet(name: string): string  // TS 类型
function greet(name: string[]): string[]  // TS 类型
function greet(name: string | string[]) {
    if (Array.isArray(name)) {
        return name.map((n) => `Welcome, ${n}!`)
    }
    return `Welcome, ${name}!`
}

// 单个问候语，此时只有一个类型 string
const greeting = greet('Petter')
console.log(greeting) // Welcome, Petter!

// 多个问候语，此时只有一个类型 string[]
const greetings = greet(['Petter', 'Tom', 'Jimmy'])
console.log(greetings)
// [ 'Welcome, Petter!', 'Welcome, Tom!', 'Welcome, Jimmy!' ]

/*
第 1 行是函数的 TS 类型，告知 TypeScript ，当入参为 string 类型时，返回值也是 string ;
第 2 行也是函数的 TS 类型，告知 TypeScript ，当入参为 string[] 类型时，返回值也是 string[] ;
第 3 行开始才是真正的函数体，这里的函数入参需要把可能涉及到的类型都写出来，用以匹配前两行的类型，并且这种情况下，函数的返回值类型可以省略，因为在第 1 、 2 行里已经定义过返回类型了。
*/


function sayHi(name: string): string
function sayHi(names: string[]): string
function sayHi(name: string | string[]): string | string[] {
    if (Array.isArray(name)) {
        return name.map(n => 'hi ' + n)
    }
    
    return 'hi '+name
}


console.log(sayHi('jack'));
console.log(sayHi(['son','mali']));