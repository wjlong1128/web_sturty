let arr = [1, 23, 4, 5, 6];

let newArr = [];
/*
for (let i = 0; i < arr.length / 2; i++) {
  newArr[i] = arr[arr.length - 1 - i];
  newArr[arr.length - 1 - i] = arr[i];
}*/

// 或者
for (let index = arr.length; index >= 0; index--) {
   newArr[newArr.length] = arr[index] 
}
newArr.forEach((item) => {
  console.log(item);
});
