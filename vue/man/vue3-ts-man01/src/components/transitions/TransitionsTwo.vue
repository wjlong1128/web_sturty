<template>
    <div>
        <button @click="random">random</button>
        <br>
        <br>
        <TransitionGroup tag="div" class="wraps" move-class="mm">
            <div  class="item" v-for="item in list" :key="item.id">
                {{ item.number }}
            </div>
        </TransitionGroup>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import _ from 'lodash'
let list = ref(Array.apply(null, { length: 81 } as number[]).map((_, index) => {
    return {
        id: index,
        number: (index % 9) + 1
    }
}))

console.log(list);
const random = ()=>{
    list.value = _.shuffle(list.value)
}
</script>

<style lang="less">
.mm {
    transition: all 1s;
}
.wraps {
    display: flex;
    flex-wrap: wrap;
    width: calc(27 * 9px);
    .item {
        width: 25px;
        height: 25px;
        border: 1px solid #ccc;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>