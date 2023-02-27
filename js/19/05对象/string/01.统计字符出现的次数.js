let str = 'qwewqefewsrwrwe s '

const countChar = (ch) => {
    let count = 0;
    for (let i = str.indexOf(ch); i != -1; i = str.indexOf(ch, i + 1)) {
        count++;
    }
    return count;
}
console.log(countChar('f'));