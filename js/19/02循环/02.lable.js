let i = 0;
/*
    一个 label 提供了一个让你在程序中其他位置引用它的标识符。例如，你可以用 label 标识一个循环，
    然后使用 break 或者 continue 来指出程序是否该停止循环还是继续循环。
*/
outI:
while (i < 10) {
    console.log(i);
    if (i % 2 === 0) {
        break outI
    }
}

console.log('end...' + (0%2 === 0));