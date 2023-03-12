<template>
    <div class="tab-item">
        <div class="photo">
            <img :src="item.img" alt="">
            <span>{{ item.rate }}</span>
        </div>
        <div class="desc">
            <div class="name">{{ item.name }}</div>
            <div class="hot-bar">
                <div class="inner">{{ item.hot }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
// 接收父组件的值
// <TabItem :item="item"></TabItem>
// const props = defineProps(['item'])
// const item = props.item
const { item } = defineProps({
    item: Object
})
</script>

<style>
.tab-item {
    display: flex;
    margin-bottom: 20px;
}

.photo {
    position: relative;
    width: 150px;
    background-color: #fff;
    border-radius: 20px;
    overflow: hidden;
}

.photo img {
    width: 100%;
    vertical-align: top;
}

.photo span {
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    background-color: rgb(245, 102, 1);
    font-size: 20px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-right-radius: 20px;
    border-top-left-radius: 20px;
}

.desc {
    display: flex;
    flex: auto;
    margin-left: 30px;
    flex-flow: column;
    justify-content: space-evenly;
    font-size: 30px;
    color: #fff;
}

.hot-bar {
    text-indent: .5em;
    background-color: rgba(0, 0, 0, .8);
    border-radius: 20px;
    overflow: hidden;
}

.inner {
    width: 50%;
    border-radius: 20px;
    background-image: linear-gradient(90deg, rgb(187, 3, 52) 50%, rgb(66, 2, 12));
    white-space: nowrap;
}
</style>