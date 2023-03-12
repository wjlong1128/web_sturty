<template>
  <div>
    <h1>{{ obj1.name }}</h1>
    <button @click="setName">点击修改姓名</button>
    <h1>{{ obj2.name }}</h1>
    <!-- {{ hi('你好') }} -->
    {{ get() }}
  </div>
</template>

<script setup>
import { ref ,getCurrentInstance} from "vue";
// ref推荐使用于顶层变量
const obj1 = ref({
  name: "张三",
});

const obj2 = {
  name: ref("张三"),
};

function setName() {
  obj1.value.name = "李四";
}
const {proxy} = getCurrentInstance()

function get() {
  proxy.$http({ url: "test" })
    .then(() => {})
    .catch((e) => {
      console.log(e);
    });
}
</script>