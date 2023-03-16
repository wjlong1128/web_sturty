"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trigger = exports.track = void 0;
const targetMap = new WeakMap();
const track = (target, key) => {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
        depsMap = new Map();
        targetMap.set(target, depsMap);
    }
    let deps = depsMap.get(key);
    if (!deps) {
        deps = new Set();
        depsMap.set(key, deps);
    }
    deps.add(activeEffect);
};
exports.track = track;
const trigger = (target, key) => {
    const depsMap = targetMap.get(target);
    const deps = depsMap === null || depsMap === void 0 ? void 0 : depsMap.get(key);
    if (!deps) {
        throw new Error(`no key ${key.toString()}`);
    }
    deps.forEach((effectfn) => effectfn());
};
exports.trigger = trigger;
let activeEffect;
const effect = (fn) => {
    const _effect = function () {
        activeEffect = _effect;
        fn();
    };
    _effect();
};
exports.default = effect;
