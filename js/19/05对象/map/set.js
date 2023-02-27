let s = new Set()
s.add(1)
s.add(3)
s.add(1)

for(let item of s){
    console.log(item);
}

let a = Array.from(s)

console.log(a);

let ss= new Set(a)
console.log(ss);

