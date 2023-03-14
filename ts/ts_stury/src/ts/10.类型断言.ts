// 对单人或者多人打招呼
function greet(name: string | string[]): string | string[] {
  if (Array.isArray(name)) {
    return name.map((n) => `Welcome, ${n}!`)
  }
  return `Welcome, ${name}!`
}

// 已知此时应该是 string[] ，所以用类型断言将其指定为 string[]
const greetings = greet(['Petter', 'Tom', 'Jimmy']) as string[]

// 现在可以正常使用 join 方法
const greetingSentence = greetings.join(' ')
console.log(greetingSentence)



// 原本要求 age 也是必须的属性之一
interface User {
  name: string
  age: number
}

// 但是类型断言过程中，遗漏了
const petter = {} as User
petter.name = 'Petter'

// TypeScript 依然可以运行下去，但实际上的数据是不完整的
console.log(petter) // { name: 'Petter' }
