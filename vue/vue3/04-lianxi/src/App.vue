<template>
    <div class="tab-wrapper">
        <div class="tab-head">
            <div class="tab-button" @click="state = 0" :class="{ active: state === 0 }">热门球员</div>
            <div class="tab-button" @click="state = 1" :class="{ active: state === 1 }">热门球队</div>
        </div>
        <div class="main">
            <!-- v-if 通过从 dom上消失来隐藏切换性能差 类似于懒加载-->
            <!-- v-show  通过从 display:none来隐藏 切换性能好但是会将所有组件初始化,在这时候性能比较差-->
            <div v-show="state === 0">
                <div class="tab-list">
                    <TabItem :item="item"></TabItem>
                </div>
            </div>
            <div v-show="state === 1">
                <div class="tab-list">
                    <TabItem :item="item"></TabItem>
                </div>
            </div>
        </div>
    </div>
</template>>

<script setup>
import { reactive } from 'vue';
import TabItem from "./components/TabItem.vue";
import { ref } from 'vue'
const state = ref(0)


const item = reactive({
    name: '梅西',
    img: 'https://i0.wp.com/sportytell.com/wp-content/uploads/2018/12/Lionel-Messi-of-FC-Barcelona.jpg?fit=1920%2C1080&ssl=1',
    rate: 1,
    hot: 433760
})
</script>

<style>
.tab-wrapper {
    width: 800px;
    padding: 20px;
    background-color: rgb(45, 83, 211);
}

.tab-head {
    display: flex;
    border-radius: 20px;
    overflow: hidden;
}

.tab-button {
    flex: auto;
    padding: 10px 0;
    font-size: 30px;
    text-align: center;
    background-color: #fff;
    cursor: pointer;
    transition: all .2s;
}

.tab-button:not(.active):hover {
    color: rgb(187, 3, 52);
}

.active {
    background-color: rgb(187, 3, 52);
    color: #fff;
}

.tab-list {
    margin: 20px;
}
</style>