<template>
    <div>
        <h1>name={{ result.username }}</h1>
        <h2>age={{ result.age }}</h2>
    </div>
</template>

<script lang="ts"  setup>
import { axios } from '../../server/axios';
interface Person {
    username: string,
    age: number
}

// 直接可以使用该关键字  让该组件成为异步组件
const result: Person = await axios.get<Person>('./data.json', 2000)
console.log(result);
</script>