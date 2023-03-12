<template>
    <!-- 插槽  会获取使用该组件标签体的内容 -->
    <button @click="say(text)">
       <slot>默认内容</slot> 
        <br>
        
        <slot name="valueSlot" :stuname="stu.name" :age="stu.age" ></slot>
    </button>
    

</template>

<script setup>
const stu = {
    name:'zhangsan',
    age:19,
    gender:'ch'
}
function say(value) {
    alert(value)
}

const { text } = defineProps(['text'])
</script>