let str = "";
for (let i = 0; i < 10; i++) {
  for (let j = i; j < 10; j++) str += "x";
  str += "\n";
}

console.log(str);

let array = [0, 1, 2];
// forech 函数 默认接收一个函数   这个函数的第一个参数就是数组的值
// 缺点 拿不到下标
array.forEach(function (item) {
  console.log(item);
});
// 简化
array.forEach((item) => {
  console.log(item);
});
