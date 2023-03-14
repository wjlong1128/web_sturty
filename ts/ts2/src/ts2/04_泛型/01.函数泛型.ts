// 定义方式1
function identity<T>(arg: T): T {
    return arg;
}
// 定义方式2
const myIdentity: <T>(arg: T) => T =
    function <T>(arg: T) {
        return arg
    }
    
    