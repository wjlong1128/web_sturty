<template>
    <table>
        <caption>学生列表</caption>
        <th>
        <td>学号</td>
        <td>姓名</td>
        <td>年龄</td>
        <td>性别</td>
        <td>住址</td>
        <td>操作</td>
        </th>

        <tr v-for="({ id, name, age, addr, sex }, index) in props.stuList" :key="id">
            <td>{{ id }}</td>
            <td>{{ name }}</td>
            <td>{{ age }}</td>
            <td>{{ addr }}</td>
            <td>{{ sex }}</td>
            <!-- 在模板中可以使用一个全局参数$emit -->
            <!-- 第一个参数为父组件中自定义事件的名称 第二个为指定函数的参数-->
            <!-- <td><a href="#" @click.prevent="event => { $emit('stuDel', index) }">操作</a></td> -->
            <!-- 使用模板的自定义事件 -->
            <td><a href="#" @click.prevent="emits('stuDel', index)">操作</a></td>
        </tr>
    </table>
</template>

<script setup>
const props = defineProps(['stuList'])
const emits = defineEmits(['stuDel'])
</script>
