// js 惯用
// function pluck(o, names) {
//     return names.map(n => o[n]);
// }
interface Person {
    name: string,
    age: number
}
const p: Person = {
    name: 'zhangsan',
    age: 19
}


// 测试keyof  T extends keyof Person   说人话就是T 就是person的key

let key: keyof Person = 'name'

function get<K extends keyof Person>(key: K, p: Person): Person[K] {
    return p[key]
}

console.log(get('age', p));
console.log(get('name', p));


function pluck<O, K extends keyof O>(obj: O, keys: K[]): O[K][] {
    return keys.map(key => obj[key])
}

console.log(pluck(p, ['age', 'name']));



interface MMap<T> {
    [key: string]: T
}

let map: MMap<string> = { "key": 'value', 'name': 'zhangsan', 1: 'lisi', '2': 'wangwu    ' }
console.log(map['key']);
console.log(map[1]); // lisi
console.log(map[2]); // wangwu

// string | number
let keyType: keyof MMap<string> = 'zhangsan' 

// MMap<number>
let value:MMap<MMap<number>> = {'1':{1:1}}