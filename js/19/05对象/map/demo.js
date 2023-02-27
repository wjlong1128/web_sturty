let map = new Map()

map.set('k1','v1')
map.set('k2','v2')
map.set('k3','v3')
map.set('k4','v4')

// console.log(map.has('k1'));
// console.log(map.has('k5'));
// console.log(map.get('k2'));
map.delete('k3')
// for(let [k,v] of map){
    // console.log(k);
    // console.log(v);
// }

// map.forEach((v,k)=>{
//     console.log(k);
//     // console.log(v);
// })

let wmap = new WeakMap()

