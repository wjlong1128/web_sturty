console.log(module.exports === exports)
// exports.go = 'Go'
// exports.cpp = "C++";

module.exports = {
    go:'Go',
    cpp:'C++'
}

// exports = {
//     go:'Go',
//     cpp:'C++'
// }
// 这个不行 因为这个是改变量 地址值改变 而不是改对象