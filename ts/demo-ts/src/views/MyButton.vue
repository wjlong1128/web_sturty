<script lang="ts" setup>
import Student, { Sex } from '../model/Student'

import { reactive, ref } from 'vue';
const count = ref<number>(100)
const stu = reactive<Student>({
    id: 1,
    name: 'zhangsan',
    age: 12,
    sex: Sex.MAN

})

function incr() {
    count.value++
}
</script>
<template>
    <div>
        <button @click="incr">{{ count }}</button>
        <br>
        <slot :stu="stu">默认显示插槽内容</slot>
    </div>
</template>