<template>
    <div class="box" style="color:red;">
        <slot name="default" :son="son">默认</slot>
    </div>

    <div style="color:blue;">
        <slot name="noDefault" son="{abc}">默认</slot>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const son = reactive({ name: 'zhangsan', age: 18 })
</script>