<!-- 演示递归组件 -->
<template>
    <div v-for="item in props.data" :key="item.name" class="tree">
        <input type="checkbox" v-model="item.checked" name="" id=""><span>{{ item.name }}</span>
        <!-- vue3中直接可以使用文件名 -->
        <Tree v-if="item?.children?.length" :data="item.children" class="children"></Tree>
    </div>
</template>

<script lang="ts" setup>
import { withDefaults, defineExpose } from 'vue'
interface Tree {
    name: string,
    checked: boolean,
    children?: Tree[]
}

const props = withDefaults(defineProps<{
    data: Tree[]
}>(), { data: () => [] })
</script>

<style scoped>
.tree {
    margin-left: 2em;
}
</style>