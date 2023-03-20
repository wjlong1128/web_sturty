<template>
    <main>
        <el-input v-model="input" placeholder="Please input" class="ipt" />
    </main>
    <B>
        <h2 class="a">将此元素放置B中</h2>
    </B>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import B from './B.vue';
const input = ref('')
</script>

<style lang="less" scoped>
// .ipt {
//     font-size: 16px;

//     .el-input__inner {
//         background-color: red;
//     }
// }

/*
给HTML的DOM节点加一个不重复data属性(形如：data-v-123)来表示他的唯一性
在每句css选择器的末尾（编译后的生成的css语句）加一个当前组件的data属性选择器（如[data-v-123]）来私有化样式
如果组件内部包含有其他组件，只会给其他组件的最外层标签加上当前组件的data属性
https://blog.csdn.net/qq1195566313/article/details/123319462
.ipt[data-v-57544a29] {
  font-size: 16px;
}

.ipt .el-input__inner[data-v-57544a29] {
  background-color: red;
}

// 无法命中
<div data-v-57544a29="" class="el-input ipt">
    <div class="el-input__wrapper">
        <input class="el-input__inner" type="text" autocomplete="off" tabindex="0" placeholder="Please input"
            id="el-id-3491-0">
    </div>
</div>
*/

.ipt {
    font-size: 16px;

    :deep(.el-input__inner) {
        background-color: red;
    }
}

/*
.ipt[data-v-57544a29] {
  font-size: 16px;
}
可以命中
.ipt[data-v-57544a29] .el-input__inner {
  background-color: red;
}
*/
</style>