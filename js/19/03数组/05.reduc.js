let array = [10,1,2,3]

let sum  = array.reduce((pre,current,currentIndex,arr)=>{
    console.log(pre);
    return pre + current
},0)

console.log('sum',sum);