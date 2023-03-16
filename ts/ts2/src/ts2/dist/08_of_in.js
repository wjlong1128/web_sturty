// for..of和for..in均可迭代一个列表；但是用于迭代的值却不同，
// for..in迭代的是对象的 键 的列表，
// 而for..of则迭代对象的键对应的值。
var list = [4, 5, 6];
for (var i in list) {
    console.log(i); // "0", "1", "2",
}
for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
    var i = list_1[_i];
    console.log(i); // "4", "5", "6"
}
/*
另一个区别是for..in可以操作任何对象；它提供了查看对象属性的一种方法。
但是 for..of关注于迭代对象的值。
内置对象Map和Set已经实现了Symbol.iterator方法，让我们可以访问它们保存的值。
*/
var pets = new Set(["Cat", "Dog", "Hamster"]);
// pets["species"] = "mammals";
for (var pet in pets) {
    console.log(pet); // "species"
}
for (var _a = 0, pets_1 = pets; _a < pets_1.length; _a++) {
    var pet = pets_1[_a];
    console.log(pet); // "Cat", "Dog", "Hamster"
}
