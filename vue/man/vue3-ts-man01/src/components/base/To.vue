<template>
    <div>
        <h2>非响应式对象被toRef修改 {{ person }} -- {{ name1 }}</h2>
        <button @click="change1">change1</button>
        <hr>
        <h2>响应式对象被toRef修改 {{ person2 }} -- {{ name2 }}</h2>
        <button @click="change2">change2</button>
        <hr>
        <h2>{{ name }}-- {{ age }}</h2>
        <hr>
        <h2>toRaw 让响应式变成原始值 {{ toRaw(person2) }}</h2>
    </div>
</template>

<script lang="ts" setup>
import { reactive, toRaw, toRef, toRefs } from 'vue';

interface P {
    name: string,
    age: number
}

// toRef 只能修改响应式对象的值， 非响应式对象视图毫无变化
const person: P = { name: 'zhangsan', age: 19 }
let name1 = toRef(person, "name")
const change1 = () => {
    name1.value = 'lisi'
}

const person2 = reactive<P>({
    name: 'zhangsan',
    age: 10
})
// 改变时会影响到原对象的属性值
let name2 = toRef(person2, "name")
const change2 = () => {
    name2.value = 'lisi'
}

// 手搓toRefs
// const toRefs = <T extends object>(obj: T) => {
//     const map: any = {}
//     for (let key in obj) {
//         map[key] = toRef(obj, key)
//     }
//     return map
// }

const { name, age } = toRefs(person2)
console.log(person2, toRaw(person2));
</script>