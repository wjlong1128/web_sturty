var array = ['s1', 's2'];
console.log(array[1]);
//  可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。
//  这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象
console.log(array['0']);
var maps = { 1: 'zhangsan', '2': 'lisi' };
console.log(maps[1]);
console.log(maps[2]);
