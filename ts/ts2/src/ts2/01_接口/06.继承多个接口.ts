
interface Shape {
    color: string
}

interface PenStrke {
    penWidth: number
}

interface Square extends Shape, PenStrke {

}

interface MyFactory {
    new(c: string, p: number): Square
}

class SquareImpl implements Square {
    color: string
    penWidth: number
    constructor(c: string, p: number) {
        this.color = c;
        this.penWidth = p
    }
}

let squareImpl: MyFactory = SquareImpl
// 这里是判定类型的第二种写法
let square = <Square>{}

square.color = '#fff'
square.penWidth = 1000
console.log(square);