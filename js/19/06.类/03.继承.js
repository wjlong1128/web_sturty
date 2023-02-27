class Fa {
    #name
    constructor(name) {
        this.#name = name
        if (name === undefined || name === ''){
            this.#name = 'defaultName'    
        }
    }

    getName() {
        return this.#name;
    }
}

class Son extends Fa {
    constructor(name){
        super(name)
    }

    get fullName(){
        return super.getName()
    }
}

let son = new Son('a')
console.log(son.getName());
console.log(son.fullName);