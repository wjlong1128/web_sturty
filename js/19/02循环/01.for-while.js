let step = 0

//  与C语言相同
for (; step < 10; ++ step)
    console.log(step);
    // console.log(step);

console.log('==========');

//  没啥好说的
step = 0
while (1 && true && 'abc') {
    if(step > 10) {
        break
    }
    console.log(step);
    step++
}