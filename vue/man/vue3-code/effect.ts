
const targetMap = new WeakMap<any, Map<string | symbol, Set<any>>>();

export const track = (target: any, key: string | symbol) => {
  let depsMap: Map<string | symbol, Set<any>> | undefined =
    targetMap.get(target);
  if (!depsMap) {
    depsMap = new Map<string, Set<any>>();
    targetMap.set(target, depsMap);
  }

  let deps: Set<any> | undefined = depsMap.get(key);
  if (!deps) {
    deps = new Set<any>();
    depsMap.set(key, deps);
  }
  deps.add(activeEffect);
};

export const trigger = (target: any, key: string | symbol) => {
  const depsMap: Map<string | symbol, Set<any>> | undefined =
    targetMap.get(target);
  const deps: Set<any> | undefined = depsMap?.get(key);
  if (!deps) {
    throw new Error(`no key ${key.toString()}`);
  }
  deps.forEach((effectfn) => effectfn());
};

let activeEffect: Function;
const effect = (fn: Function) => {
  const _effect = function () {
    activeEffect = _effect;
    fn();    
  };
  _effect();
};

export default effect