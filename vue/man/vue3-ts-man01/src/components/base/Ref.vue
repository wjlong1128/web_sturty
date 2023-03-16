<template>
  <div>
    <h2>{{ person.name }}</h2>
    <button @click="change">change</button>
    <hr />
    <h2>shallowref+ {{ person2.name }}</h2>
    <button @click="change2">change2</button>
    <hr />
    <h2>自定义Ref {{ myref }}</h2>
    <button v-on:click="change3">change3</button>
    <hr />
    <h2 ref="dom">获取dom元素的ref</h2>
    <button @click="change4">change4</button>
    <hr />
  </div>
</template>

<script lang="ts" setup>
import {
  ref,
  Ref,
  isRef,
  shallowRef,
  ShallowRef,
  triggerRef,
  customRef,
} from "vue";

interface P {
  name: string;
}
// const person = ref<P>({
//     name:'zhangsan'
// })
// 类型复杂时推荐使用
const person: Ref<P> = ref({
  name: "zhangsan",
});

const change = () => {
  person.value.name = "lisi";
  console.log(person);
  console.log("是ref嘛" + isRef(person));
};

// 浅层次的响应式 只会涉及到 被修饰的属性的 object.value 的修改 而不是obj.value.name 的修改
const person2: ShallowRef<P> = shallowRef({
  name: "lisi",
});

// 注意 这两个ref(ref,shallowRef)不能写在一块 会影响视图的更新
// 测试 可以先点击此视图的change2 按钮 在点击change按钮 会发现 被强制更新了
const change2 = () => {
  person2.value.name = "wangwu";
  // 此ref[强制更新收集的依赖] 被ref底层调用
  // triggerRef(person2)
};

// 防抖 防止过分点击
let timer: any;
// 自定义ref customRef
function MyRef<T>(value: T) {
  //  trcak  收集依赖
  return customRef((track, trigger) => {
    // 要求返回一个对象
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          value = newValue;
          console.log("触发更新");
          // 触发更新
          trigger();
          timer = null;
        }, 500);
      },
    };
  });
}

const myref = MyRef<string>("wanger");
const change3 = () => {
  myref.value = "zhangsan";
  console.log(myref);
};

// 获取dom元素
// 1.<h2 ref="dom">获取dom元素的ref</h2> 设置ref的名称
// 2.定义同名变量 = ref() 没有提示 设置泛型
const dom = ref<HTMLDivElement>();
// console.log(dom.value?.innerText);
// 输出undefined 为什么 因为此时dom没有渲染完成

const change4 = () => {
  console.log(dom.value?.innerText);
};

/*
ref 源码部分

在shallowRef 中直接没有进行toReactive 部分
this._value = __v_isShallow ? value : toReactive(value)
toReactive->isObject(value) ? reactive(value) : value
*/
</script>
