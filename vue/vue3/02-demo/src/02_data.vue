<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ stu.name + " " + stu.age }}</h2>
  </div>
</template>

<script>
// vue提供了浅层的响应对象处理方式
import { shallowReactive } from "vue";
export default {
  data() {
    // vue会将对象中的属性也做代理 为响应式属性
    // return {
    //   msg: "Vue is Good",
    //   stu: {
    //     name: "swk",
    //     age: 18,
    //   },
    // };
    return shallowReactive({
      msg: "Vue is Good",
      stu: {
        name: "swk",
        age: 18,
      },
    });
  },
};
</script>