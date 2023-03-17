<template>
    <div class="box">
        <!-- 值为选择器 将该组件置于那个选择器所定位的元素中 -->
        <!-- 该属性为 true 选择器无效 -->
        <Teleport :disabled="true" to="body">
            <A></A>
        </Teleport>
    </div>
</template>

<script lang="ts" setup>
import A from './A.vue';


</script>

<style>
.box {
    /* 这一行让A组件中的绝对定位发生变化 */
    position: relative;
}
</style>