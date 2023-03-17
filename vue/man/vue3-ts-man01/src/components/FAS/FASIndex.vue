<template>
    <div>
        <!-- 1.父子组件传参 -->
        <!-- <AttrsFater></AttrsFater> -->
        <!-- <MyButton>点击</MyButton>  -->
        <!-- 定义全局组件之后 -->
        <!-- <m-b>你好</m-b> -->

        <!-- 递归组件 -->
        <!-- <Tree :data="trees"></Tree> -->

        <!-- 动态组件 Tab页 -->
        <!-- <Tab></Tab> -->

        <!-- 插槽 -->
        <SlotIndex></SlotIndex>
    </div>
</template>

<script lang="ts" setup>
// import AttrsFater from './attrs/AttrsFater.vue';
// import MyButton from './compons/MyButton.vue';
// import Tab from './compons/Tab.vue';
import SlotIndex from './slot/SlotIndex.vue';

import Tree from './compons/Tree.vue';
import { reactive } from 'vue';

interface Tree {
    name: string,
    checked: boolean,
    children?: Tree[]
}

const trees = reactive<Tree[]>([
    {
        name: '1',
        checked: false,
        children: [
            { name: '1-1', checked: false }
        ]
    },
    {
        name: '2',
        checked: false
    },
    {
        name: '3',
        checked: false,
        children: [
            {
                name: '3-1',
                checked: false,
                children: [{ name: '3-1-1', checked: false }]
            }
        ]
    }
])

</script>