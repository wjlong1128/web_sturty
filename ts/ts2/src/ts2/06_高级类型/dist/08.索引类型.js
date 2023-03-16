var p = {
    name: 'zhangsan',
    age: 19
};
// 测试keyof  T extends keyof Person   说人话就是T 就是person的key
// name / age  keyof T的结果为 T上已知的公共属性名的联合。
var key = 'name';
function get(key, p) {
    return p[key];
}
console.log(get('age', p));
console.log(get('name', p));
function pluck(obj, keys) {
    return keys.map(function (key) { return obj[key]; });
}
console.log(pluck(p, ['age', 'name']));
var map = { "key": 'value', 'name': 'zhangsan', 1: 'lisi', '2': 'wangwu    ' };
console.log(map['key']);
console.log(map[1]); // lisi
console.log(map[2]); // wangwu
// string | number
var keyType = 'zhangsan';
// MMap<number>
var value = { '1': { 1: 1 } };
