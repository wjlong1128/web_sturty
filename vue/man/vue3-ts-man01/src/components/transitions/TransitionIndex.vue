<template>
    <div>
        <button @click="change">change</button>
    </div>
    <div>
        
        <Transition  name="fade" enter-from-class="enter-from" :duration="500009" >
            <div class="box" v-if="flag"></div>
        </Transition>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';


const flag = ref(false)
const change = () => {
    flag.value = !flag.value
}
</script>

<style>
.box {
    width: 200px;
    height: 200px;
    background-color: red;
}

/* 开始 */
/* .fade-enter-from {
    width: 0;
    height: 0;
} */
.enter-from {
    width: 0;
    height: 0;
}

/* 曲线 */
.fade-enter-active {
    transition: all .5s;
}

/* 结束 */
.fade-enter-to {
    width: 200px;
    height: 200px;
}

/* 隐藏 */
/* 开始 */
.fade-leave-from {
    width: 200px;
    height: 200px;
}

/* 曲线 */
.fade-leave-active {
    transition: all .5s;
}

/* 结束 */
.fade-leave-to {
    width: 0px;
    height: 0px;
}
</style>