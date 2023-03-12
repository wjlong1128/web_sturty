<template>
    <!-- 自定义事件 -->
    <StudentList :stuList="STU_LIST" @stuDel="delHandler"></StudentList>
</template>

<script setup>
// 自定义事件： 让子组件操作父组件数据
import {reactive} from 'vue'
import StudentList from './views/StudentList.vue';
const STU_LIST = reactive([
    { id: 1, name: '孙悟空', age: '18', sex: 'man', addr: '花果山' },
    { id: 2, name: '猪八戒', age: '28', sex: 'man', addr: '高老庄' },
    { id: 3, name: '沙和尚', age: '38', sex: 'man', addr: '流沙河' },
    { id: 4, name: '唐僧', age: '18', sex: 'man', addr: '女儿国' },
]) 

// 将此方法传递给授权的子组件
function delHandler(index) {
    if (confirm('该操作不可恢复'))
        STU_LIST.splice(index, 1)
}
</script>

<style></style>