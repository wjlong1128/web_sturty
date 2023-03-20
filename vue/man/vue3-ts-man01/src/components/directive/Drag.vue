<template>
    <div>
        <div class="box" v-move>
            <div class="header"></div>
            <div>
                内容
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Directive } from 'vue';

const vMove: Directive<HTMLElement, any> = (el, dir): void => {
    const ele = el as HTMLDivElement

    const mouseDown = (e: MouseEvent) => {
        let X = e.clientX - el.offsetLeft
        let Y = e.clientY - el.offsetTop
        const mouseMove = (e: MouseEvent) => {
            el.style.left = e.clientX - X + 'px'
            el.style.top = e.clientY - Y + 'px'
        }
        document.addEventListener('mousemove', mouseMove)
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', mouseMove)
        })
    }
    // 鼠标按下
    ele.addEventListener('mousedown', mouseDown)
}
</script>

<style lang="less">
.box {
    position: absolute;
    box-sizing: border-box;
    width: 500px;
    height: 300px;
    border: 5px solid black;

    .header {
        border-bottom: 5px solid #000;
        background-color: #ccc;
        height: 50px;
    }
}
</style>