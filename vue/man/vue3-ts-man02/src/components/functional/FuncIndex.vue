<template>
    <Btn text="wjl" @on-wjl="getBtn">
        <!-- <template #default> -->
        <!-- <button>我就是一个按钮</button> -->
        <!-- </template> -->
    </Btn>
</template>

<script lang="ts" setup>
// 1. 使用vue函数创建模板
// import { render, createVNode } from 'vue';
// const node = createVNode('div', { class: 'box' }, '由createVNode创建')
// render(node, document.body)

import { h } from 'vue'

type Props = {
    text?: string
}

const Btn = (props: Props, ctx: any) => {
    return h(
        'div',
        {
            // class: ['border-solid', 'border-4', 'border-light-blue-500'],
            onClick: () => {
                ctx.emit('on-wjl', '我是按钮')
            }
        },
        // props.text,
        ctx.slots.default()
    )
}

const getBtn = (msg: any) => {
    console.log('父组件收到', msg);
}
</script>

<style></style>