function create<T>(c: { new(): T }): T {
    return new c();
}

class BeeKeeper {
    hasMask: boolean;
    constructor() {
        this.hasMask = true
    }
}


class Animals {
    numLegs: number;
    constructor(numLegs: number) {
        this.numLegs = numLegs
    }
}

class Bee extends Animals {
    keeper: BeeKeeper;
    constructor() {
        super(1)
        this.keeper = create(BeeKeeper)
    }
}


function createInstance<A extends Animals>(c: new () => A): A {
    return new c();
}

let bee = createInstance(Bee).keeper.hasMask;  // typechecks!
console.log(bee);