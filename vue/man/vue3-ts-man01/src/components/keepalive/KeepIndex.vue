<template>
    <div>
        <el-button type="primary" @click="flag = !flag">切换</el-button>
    </div>
    <hr>
    <div>
        <!-- 
            默认全部缓存
            include 属性 只会缓存在数组中的组件
            exclude 
            max: 缓存组件的最大数量 会剔除掉最旧的
            只能容纳一个子节点， 用v-show会报错的
         -->
        <KeepAlive :exclude="[]">
            <Form v-if="flag"></Form>
            <Form2 v-else></Form2>
        </KeepAlive>
    </div>
</template>

<script lang="ts" setup>
import Form from './Form.vue';
import Form2 from './Form2.vue';
import { onActivated, onDeactivated, ref } from 'vue';

const flag = ref(true)
</script>