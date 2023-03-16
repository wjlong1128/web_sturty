import { track, trigger } from "./effect";
const isObject = (target: any): boolean =>
  target != null && typeof target == "object";
export const reactive: any = <T extends object>(target: T) => {
  return new Proxy(target, {
    get(target, key, recerver) {
      // 使用此调用保证上下文 也就是this指向不出现错乱
      let res = Reflect.get(target, key, recerver) as object;
      track(target, key);
      if (isObject(res)) {
        return reactive(res);
      }
      return res;
    },
    set(target, key, value, recerver) {
      let res = Reflect.set(target, key, value, recerver);
      trigger(target, key);
      return res;
    },
  });
};
