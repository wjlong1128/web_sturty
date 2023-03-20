<template>
    <div>
        <!-- 1. query -->
        <!-- <h2>name:{{ route.query.name }}</h2>
        <h2>price:{{ route.query.price }}</h2>
        <h2>count:{{ route.query.count }}</h2> -->
        <!-- 2. params [过时] -->
        <!-- <h2>name:{{ route.params.name }}</h2>
        <h2>price:{{ route.params.price }}</h2>
        <h2>count:{{ route.params.count }}</h2> -->
        <!-- 3. 动态路由参数 -->
        <h2>name:{{ route.params.name }}</h2>
    </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
const route = useRoute()
interface Goods {
    name: string,
    price: Number,
    count: number
}
</script>

<style></style>