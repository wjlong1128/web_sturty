class MyPromise {
    #state = "pending"; // fulfilled rejected
    #result;
    #callbacks = [];
    constructor(executor) {
        // binding 函数内部的this 防止外部箭头函数改变this指向 导致内部数据报错
        // 或者将此class 对象中的此方法改变为箭头函数而不使用bind 因为箭头函数是没有[自身this指向的]
        // 但是类中的箭头函数是存放于对象自身而不是对象原型中的 不太省内存也就是说每个对象都有自己一个这样的方法
        executor(this.#resolve.bind(this), this.#reject.bind(this));
    }

    #resolve(value) {
        if (this.#state !== "pending") return;
        this.#result = value;
        queueMicrotask(() => {
            this.#callbacks.forEach((cb) => {
                cb();
            });
        });

        this.#state = "fulfilled";
    }

    #reject(reason) { }

    then(onFulfilled, onRejected) {
        return new MyPromise((resolve, reject) => {
            if (this.#state === "pending") {
                this.#callbacks.push(() => {
                    resolve(onFulfilled(this.#result));
                });
            } else if (this.#state === "fulfilled") {
                // then中的函数应该放在微任务队列中执行
                queueMicrotask(() => {
                    resolve(onFulfilled(this.#result));
                });
            }
        });
    }
    catch(onRejected) { }
}

let promise = new MyPromise((resolve, reject) => {
    resolve("ok");
});

promise.then((value) => {
    console.log("1");
});

promise
    .then((value) => {
        return "aaa";
    })
    .then((value) => {
        console.log(value);
    });

console.log("main...");
