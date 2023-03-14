let named: string | null = 'a'

// function get(name: string | null): string {
//     function add(str: string): string {
//         // 代码错误提示 name 可能为null
//         return name.charAt(0) + str
//     }
//     name = name || "Bob"
//     return add('string')
// }


function get(name: string | null): string {
    function add(str: string): string {
        // 去除错误提示 在自己已经知道的情况下 在该变量之后添加`!` 修饰
        return name!.charAt(0) + str
    }
    name = name || "Bob"
    return add('string')
}

console.log(get(named));

/*
如果编译器不能够去除 null或 undefined，你可以使用类型断言手动去除。 
语法是添加 !后缀：
identifier!从 identifier的类型里去除了 null和 undefined：
*/

/*
本例使用了嵌套函数，
因为编译器无法去除嵌套函数的null（除非是立即调用的函数表达式）。
因为它无法跟踪所有对嵌套函数的调用，尤其是你将内层函数做为外层函数的返回值。 
如果无法知道函数在哪里被调用，就无法知道调用时 name的类型。
*/