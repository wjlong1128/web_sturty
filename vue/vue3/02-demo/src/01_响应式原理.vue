<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ vm.msg }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<script>
// 注意 vue2中数组不是响应式的 vue3因为基于代理成为响应式的了
// vue2只能通过push shift等方式有效果的改变数组   vue3可以直接通过下标改变
export default {
  created() {
    // 在组件创建完毕之后调用
    this.$data.age = 18; // $data是实际的代理对象 可以通过此向vue实例添加响应式数据
  },
  data(vm) {
    // 会将vm实例传递过来
    this.name = "孙悟空"; // 这里是直接给vue 实例指定属性 不是响应式的
    window.vm = vm;
    // 这里返回的对象Vue对该对象进行代理 从而转化为响应式数据
    return {
      msg: "Vue is Good",
      vm,
    };
  },
};
</script>