<template>
    <div class="btns">
        <!-- <button v-move.a="{ name: 'zhangsan' }">切换</button> -->
        <button v-has-show="'shop:create'">创建</button>
        <button v-has-show="'shop:edit'">编辑</button>
        <button v-has-show="'shop:delete'">删除</button>
    </div>
</template>
<!-- 实现功能 根据用户的返回的权限判断当前用户是否拥有权限 没有的话就隐藏按钮 -->
<script lang="ts" setup>
import { Directive } from 'vue'; // 一个函数接口

localStorage.setItem('userId', 'zhangsan-zs')
let permission = [
    'zhangsan-zs:shop:edit',
    'zhangsan-zs:shop:create',
    'zhangsan-zs:shop:delete',
]
const id = localStorage.getItem('userId') as string
// 简写形式
const vHasShow: Directive<HTMLElement, string> = (el, dir) => {
    if (!permission.includes(id + ':' + dir.value)) {
        el.style.display = 'none'
    }
}

/*
// 平时用到最多的就是mounted和update
type DirType = {
    name: string
}
// 对象形式
// 必须以 v{Name}:Directive 的形式来命名本地自定义指令 以使得它们可以在模板中直接调用
const vMove: Directive = {
    // 元素初始化绑定
    created() {
        console.log('');
    },
    // 指令绑定到元素之后调用 只调用一次 
    beforeMount() {

    },
    //! 元素插入到父级元素dom调用 参数1 dom 参数2  传过来的东西都在这里泛型为=后面的值的泛型
    mounted(el: HTMLElement, dir: DirectiveBinding<DirType>) {
        console.log('mounted....');
        console.log(dir.value.name);
    },
    // 元素被更新之前调用
    beforeUpdate() { },
    //! 
    updated() { },
    // 元素被移除之前调用
    beforeUnmount() { },
    //! 指令被移除之后调用 只调用一次
    unmounted() { }
}
*/
</script>

<style lang="less">
.btns {
    padding: 10px;

    button {
        margin: 20px;
    }
}
</style>