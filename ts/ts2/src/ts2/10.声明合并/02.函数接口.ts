// 对于函数成员，每个同名函数声明都会被当成这个函数的一个重载。 
// 同时需要注意，
// 当接口 A与后来的接口 A合并时，后面的接口具有更高的优先级。

class Animal { }
class Sheep extends Animal { }
class Dog extends Animal { }
class Cat extends Animal { }
interface Cloner {
    clone(animal: Animal): Animal;
}

interface Cloner {
    clone(animal: Sheep): Sheep;
}

interface Cloner {
    clone(animal: Dog): Dog;
    clone(animal: Cat): Cat;
}

/*
    被合并
    interface Cloner {
    clone(animal: Dog): Dog;
    clone(animal: Cat): Cat;
    clone(animal: Sheep): Sheep;
    clone(animal: Animal): Animal;
    }
    
    每组接口里的声明顺序保持不变，
    但各组接口之间的顺序是后来的接口重载出现在靠前位置。
 */


/*
interface Document {
    createElement(tagName: any): Element;
}
interface Document {
    createElement(tagName: "div"): HTMLDivElement;
    createElement(tagName: "span"): HTMLSpanElement;
}
interface Document {
    createElement(tagName: string): HTMLElement;
    createElement(tagName: "canvas"): HTMLCanvasElement;
}

合并后
如果签名里有一个参数的类型是 单一的字符串字面量（比如，不是字符串字面量的联合类型），
那么它将会被提升到重载列表的最顶端。
interface Document {
    createElement(tagName: "canvas"): HTMLCanvasElement;
    createElement(tagName: "div"): HTMLDivElement;
    createElement(tagName: "span"): HTMLSpanElement;
    createElement(tagName: string): HTMLElement;
    createElement(tagName: any): Element;
}
*/