<template>
    <div>
        <h1>Hello</h1>
        <h2>{{ $attrs }}</h2>
        <h3>自动透传仅限于单根组件</h3>
    </div>

    <h3 :class="$attrs.class">手动设置透传属性 注释该行会自动透传以上的属性</h3>
    
    {{ attrs.class }}
</template>

<script setup>
// let props = defineProps(['class'])
// console.log(props.class)
import { useAttrs } from 'vue'
// 在脚本中访问透传属性
const attrs = useAttrs()

</script>
