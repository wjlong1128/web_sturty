interface BusClass {
    emit(name: string): void;
    on(name: string, callback: Function): void;
}

type ParamKey = string | number | symbol;
type List = {
    [key: ParamKey]: Array<Function>;
};

class Bus implements BusClass {
    private _list: List;
    constructor() {
        this._list = {};
    }

    emit(name: string, ...args: Array<any>) {
        let eventName: Array<Function> = this._list[name];
        if(!eventName){
            throw Error(`${name} 未注册`)
        }
        eventName.forEach((fn) => {
            fn.apply(this, args);
        });
    }

    on(name: string, callback: Function) {
        // 获取函数数组
        let fn: Array<Function> = this._list[name] || [];
        fn.push(callback);
        this._list[name] = fn;
    }
}

const bus = new Bus();
export default bus;
