<script setup>
import MyButton from './views/MyButton.vue';
import A from './views/A.vue';
import { ref, watch } from 'vue'
const count = ref(0)
watch(count, function (newvalue, old) {
  console.log(`new ${newvalue}  old ${old}`)
})
</script>

<template>
  <div>
    <!-- 如果不传递 那么会显示slot标签的默认内容  不指定name 时则使用默认插槽v-slot:defualt-->
    <!-- 默认插槽 -->
    <MyButton text="Hello">
      <pre>点我一下</pre>
  </MyButton>
  <!-- 具名插槽 -->
    <A>
      <template v-slot:h1>
        这是标题1
      </template>
      <template #h2>这是标题2</template>
    </A>

    <!-- 在子组件中的solt标签中定义了一些变量
                    <slot :name="stu.name" :age="stu.age"></slot>
               -->
    <MyButton>
      <template #valueSlot="values">
        <!-- <template v-slot:valueSlot="values"> -->
        {{ values }}
      </template>
    </MyButton>

    <button @click="count++">{{ count }}</button>
  </div>
</template>
