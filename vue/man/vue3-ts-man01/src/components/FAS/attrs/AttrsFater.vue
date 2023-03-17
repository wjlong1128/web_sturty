<template>
    <div>
        <h1>父级</h1>
        <AttrsSon :title="sonView" @on-click="onSonClick" ref="sonExpose"> <!--接收子组件参数-->
        </AttrsSon>
        <!-- <AttrsSon></AttrsSon> -->
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import AttrsSon from './AttrsSon.vue';

const sonView = ref('son-view')
// 接收子组件传递的值
const onSonClick = (name: string, arr: number[]) => {
    console.log('父组件接收的值', name, arr);
}

// 接收子组件暴露的值
onMounted(() => {
    const sonExpose = ref<InstanceType<typeof AttrsSon>>()
    console.log('sonExpose', sonExpose);
})
</script>