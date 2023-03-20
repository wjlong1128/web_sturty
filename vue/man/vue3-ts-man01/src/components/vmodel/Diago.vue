<template>
    <div>
        <h1>modelValue:{{ modelValue }} 子组件</h1>
        <input type="text" :value="textVal" @input="change($event)">
        <br>
        <button @click="cancel">取消</button>
    </div>
</template>

<script lang="ts" setup>
// 接收父组件v-model 传过来的值
const props = defineProps<{
    modelValue: boolean,
    textVal: string,
    // 自定义修饰符
    textValModifiers?: {
        isBT: boolean
    }
}>()

const emits = defineEmits(['update:modelValue', 'update:textVal'])
const cancel = () => {
    emits('update:modelValue', false)
}
const change = (e: Event) => {
    const target = e.target as HTMLInputElement
    // emits('update:textVal', target.value)
    emits('update:textVal', props.textValModifiers?.isBT ? target.value += 'BT' : target.value)
}
</script>