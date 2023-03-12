<template>
    <div>
        <!-- 绑定对象直接这样写 -->
        <img :="attrs" />
    </div>
</template>

<script setup>
const attrs = {
    // 打包后public文件夹就在根目录
    src: "/images/code.png",
    alt: "Code",
    class: "v",
};
</script>

<style>
.v {
    box-sizing: border-box;
    width: 200px;
    height: 200px;
    border: 1px solid palegreen;
}
</style>