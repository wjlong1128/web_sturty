<template>
  <div>
    {{ useStore().name }} -- {{ useStore().current }}
    <button @click="change">点击改变</button>
    <br>
    <p>{{ current }} ---- {{ name }}</p>
    <p>{{ store.user }}</p>
    <hr>
    <p>getter {{ store.newName }}</p>
    <hr>
    <button @click="reset">重置</button>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from './stote'
import { storeToRefs } from 'pinia'

const store = useStore()
// 修改值
// 1. store.name= 'zhangsan'
// 2. 批量修改已有属性 store.$patch({ current: 2, name: 'zhangsan' })
// 3. 函数修改 store.$patch((state)=>{ state.name = '李四' }) 
// 4. 必须属性一样的覆盖state   store.$state = { current: 2, name: '张三' }
// 5. 使用action 上面的方法   store.setCurrent(999)

// 转换值为ref对象
const { name, current } = storeToRefs(store)
const change = () => {
  // current.value++
  store.setUser()
}


const reset = () => {
  store.$reset();
}

// state的值变化时调用此回调
// store.$subscribe((args, state) => {
//   console.log(args);
//   console.log(state);
// },{detached:true})
// 这两个true 组件被销毁了 两个方法是否存活
// 调用action中的方法时回调
store.$onAction((args)=>{
 console.log(args); 
 args.after(()=>{
  console.log('after');
 })
},true)
</script>

<style></style>