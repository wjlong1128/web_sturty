<template>
  <div>
    <h2>{{ person.name }}</h2>
    <button @click="change1">change1</button>
    <hr />
    <h2>{{ getItems() }}</h2>
    <button @click="change2">change2</button>
    <hr />
    <h2>只能查看的属性 但是会受原始对象影响 {{ read.name }}</h2>
    <button @click="change3">change3</button>
    <hr />
    <h2>shallowReactive 只能修改第一层属性 {{ data.num }}</h2>
    <button @click="change4">change4</button>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ReactiveEffect, readonly, shallowReactive } from "vue";
interface P {
  name: string;
}
const person = reactive<P>({ name: "zhangsan" });
const change1 = () => {
  person.name = "lisi";
};

// reactive 修饰的是proxy对象 被直接赋值会破坏响应式
const arr = reactive<number[]>([1, 2, 3]);
const getItems = (): Array<number> => {
  return arr;
};
const change2 = () => {
  arr[3] = 100;
};

const read = readonly(person);
const change3 = () => {
  //   read.name = "zhangsan";
  console.log(read.name);
};

// 同样的 和reactive 不能在一块 会被强制刷新
const data = shallowReactive<{ num: { name: string } }>({ num: person });
const change4 = () => {
  // data.num = {name:'wjl'}
  data.num.name = "lisi";
};

/**
 * 核心代码 
 * createReactiveObject() => 
 * const proxy = new Proxy(
    target,
    targetType === TargetType.COLLECTION ? collectionHandlers : baseHandlers
  )
  proxyMap.set(target, proxy)
  return proxy
 */
</script>
