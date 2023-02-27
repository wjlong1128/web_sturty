const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const sort = (array) => {
  if (!array.length) return;
  if (!array.length) return;
  let n = array.length - 1;
  while (true) {
    let last = 0;
    for (let i = 0; i < n; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        last = i;
      }
    }

    n = last;
    if (n == 0) {
      break;
    }
  }
};

let array = [12, 3, 340, 2, 0, 4, 1, 2, 12, 12];

sort(array)

array.forEach((i) => {
  console.log(i);
});
