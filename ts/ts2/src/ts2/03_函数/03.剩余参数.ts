let f3 = (...args: string[]) => {
    let str = ''
    args.forEach(s => { str += s })
    return str
}

let ree = f3('a','b','c','1')
console.log(ree);