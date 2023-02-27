// let getCode = (function(){
//     return function(){
//         console.log('no Name');
//     }
// })()

let getCode = (() => {
    return () => {
        console.log('noName');
    }
})()

getCode()

// 实现一个对象闭包
let createPet = function (name) {
    var sex;
    return {
        getName() {
            return name;
        },
        setName(newName) {
            name = newName
        },
        setSex: function (newSex) {
            if (typeof newSex == "string"
                && (newSex.toLowerCase() == "male" || newSex.toLowerCase() == "female")) {
                sex = newSex;
            }
        },
        toString:function(){
            return `{name:${name},sex:${sex}}`
        }
    }
}

let p1 = createPet('wang')
p1.setSex('male')
console.log(p1.toString());
// 在上面的代码中，外部函数的name变量对内嵌函数来说是可取得的，
// 而除了通过内嵌函数本身，没有其它任何方法可以取得内嵌的变量。
// 内嵌函数的内嵌变量就像内嵌函数的保险柜。
//它们会为内嵌函数保留“稳定”——而又安全——的数据参与运行。
// 而这些内嵌函数甚至不会被分配给一个变量，或者不必一定要有名字