// 合并的机制是把双方的成员放到一个同名的接口里。
interface Box {
    width: number
    height: number
}

interface Box {
    scale: number
}

interface Box {
    scale:number  // 可以重复声明
    // height:string  error
}

let box: Box = {
    width: 200,
    height: 200,
    scale: 200
}


