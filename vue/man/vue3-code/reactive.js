"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reactive = void 0;
const effect_1 = require("./effect");
const isObject = (target) => target != null && typeof target == "object";
const reactive = (target) => {
    return new Proxy(target, {
        get(target, key, recerver) {
            // 使用此调用保证上下文 也就是this指向不出现错乱
            let res = Reflect.get(target, key, recerver);
            (0, effect_1.track)(target, key);
            if (isObject(res)) {
                return (0, exports.reactive)(res);
            }
            return res;
        },
        set(target, key, value, recerver) {
            let res = Reflect.set(target, key, value, recerver);
            (0, effect_1.trigger)(target, key);
            return res;
        },
    });
};
exports.reactive = reactive;
