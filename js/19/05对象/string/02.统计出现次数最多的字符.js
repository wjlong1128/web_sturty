let str = '23123142343244434534534534543543534'
// let countObject = {}
// // for (let ch of str){
// for (let i = 0; i < str.length - 1; i++) {
//     let ch = str.charAt(i)
//     if (!countObject[ch]) {
//         countObject[ch] = 1
//     } else {
//         countObject[ch] += 1
//     }
// }

const countStrMax = (str) => {
    let temp = {}
    // for (let ch of str) {
    //     if (!temp[ch]) {
    //         temp[ch] = 1
    //     } else {
    //         temp[ch] += 1
    //     }
    // }
    for (let k in str) {
        if (!temp[str[k]]) {
            temp[str[k]] = 1
        } else {
            temp[str[k]] += 1
        }
    }
    let max = 0;
    let ch = ''
    for (k in temp) {
        if (temp[k] > max) {
            max = temp[k]
            ch = k;
        }
    }
    return {name:ch,count:max}
}

console.log(countStrMax(str));