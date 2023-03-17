<template>
    <div>
        <h1>子集 {{ props.title }}</h1>
        <button @click="send">给父组件传值</button>
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';

const props =
    // 数组方式
    // defineProps(['title'])
    // 对象方式
    // defineProps({
    //     title: {
    //         type: String,
    //         default: '默认值'
    //     }
    // })
    // ts泛型方式
    // defineProps<{ title: string }>()
    // ts 特有的定义默认值的方式
    withDefaults(defineProps<{ title: string }>(), { title: () => '默认值' })

// 给父组件传值
// const emits = defineEmits(['on-click']) // 通用写法
// ts 写法
const emits = defineEmits<{ (e: 'on-click', name: string, arr: number[]): void }>()
const send = () => {
    //  事件派发
    emits('on-click', 'zhangsan', [1, 2, 3])
}

// 将值暴露给父组件
defineExpose({ name: 'zhangsan', age: 18 })
</script>