function greet(name) {
    if (Array.isArray(name)) {
        return name.map(function (n) { return "Welcome, " + n + "!"; });
    }
    return "Welcome, " + name + "!";
}
// 单个问候语，此时只有一个类型 string
var greeting = greet('Petter');
console.log(greeting); // Welcome, Petter!
// 多个问候语，此时只有一个类型 string[]
var greetings = greet(['Petter', 'Tom', 'Jimmy']);
console.log(greetings);
function sayHi(name) {
    if (Array.isArray(name)) {
        return name.map(function (n) { return 'hi ' + n; });
    }
    return 'hi ' + name;
}
console.log(sayHi('jack'));
console.log(sayHi(['son', 'mali']));
