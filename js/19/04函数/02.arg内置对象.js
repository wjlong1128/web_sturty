// 记录了实际参数的伪数组 具有length属性 能够取元素 没有常规数组的方法
function func() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
      console.log(arguments[i]);
  }
  return sum;
}

// func(1,2,3)
let result = func(1, 2, 3);
console.log(result);
