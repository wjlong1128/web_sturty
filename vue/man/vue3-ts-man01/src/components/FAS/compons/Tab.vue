<template>
    <div style="display:flex">
        <!-- class 可以有一个静态和一个动态的  -->
        <div class="tabs" :class="[current == item.com ? 'active' : '']" v-for="(item, index) in data"
            @click="active(item.com)">
            <div>{{ item.name }}</div>
        </div>
    </div>
    <!-- 内置组件 is 属性值为definedComponent -->
    <!-- <KeepAlive> -->
    <component :is="current"></component>
    <!-- </KeepAlive> -->
</template>

<script lang="ts" setup>
import { reactive, ref, markRaw, shallowRef } from 'vue';
import A from './tab/A.vue';
import B from './tab/B.vue';
import C from './tab/C.vue';
//  markRaw 使用此函数包裹对象，就会再该对象上添加一个__skip__属性 再底层碰到此属性时会跳过代理
const data = reactive([
    // 没有必要递归代理组件中的信息
    { name: 'A组件', com: markRaw(A) },
    { name: 'B组件', com: markRaw(B) },
    { name: 'C组件', com: markRaw(C) },
    // { name: 'A组件', com: (A) },
    // { name: 'B组件', com: (B) },
    // { name: 'C组件', com: (C) },
    // { name: 'A组件', com: ('A') },
    // { name: 'B组件', com: ('B') },
    // { name: 'C组件', com: ('C') },
])

// 与上同理
// const current = shallowRef('A')
const current = shallowRef(A)

const active = (com: any) => {
    current.value = com
}

</script>

<style>
.tabs {
    border: 1px solid #ccc;
    padding: 5px 10px;
    margin: 5px;
}

.active {
    background-color: skyblue;
}
</style>