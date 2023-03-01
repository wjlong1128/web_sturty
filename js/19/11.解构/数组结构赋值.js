let [x,z,y] = [1,2,3]
console.log(z)
let [,b,,] = [1,2,3,4]
console.log(b)
// 事实上，只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值。
let [c,d] = new Set([1,2])
console.log(d)

console.log('=================')
function* fibs() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

let [first, second, third, fourth, fifth, sixth] = fibs();
// sixth // 5

// 默认值
let [none = 2] = []
console.log(none)

let [g = 1] = [undefined];
//g // 1

let [h = 1] = [null];
//h // null