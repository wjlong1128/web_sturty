<template>
    <div>
        <table>
            <tbody>
                <tr>
                    <td>name</td>
                    <td>price</td>
                    <td>count</td>
                    <td>details</td>
                </tr>
                <tr v-for="item in goods" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.price }}</td>
                    <td>{{ item.count }}</td>
                    <td><button @click="goDetils(item)">look</button></td>
                </tr>
            </tbody>
        </table>

        <RouterView></RouterView>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from 'vue';
import { useRouter, LocationQueryRaw, RouteParamsRaw } from 'vue-router';
interface Goods {
    name: string,
    price: Number,
    count: number
}



const router = useRouter()
const goDetils = (good: Goods) => {
    if (good != undefined) {
        router.push({
            name: 'details',
            // query: <unknown>good as LocationQueryRaw
            // params: <unknown>good as RouteParamsRaw
            // 动态路由参数
            params: {
               name:good.name 
            }

        })
    }
}

const goods = reactive(<Goods[]>[])
onMounted(async () => {
    let result = await fetch('./goods.json')
    let temp = await result.json() as { data: Goods[] }
    temp.data.forEach(item => goods.push(item))
})


</script>

<style>
table {
    border: 1px solid gray;
    border-collapse: collapse;
    /*合并单元格边框*/
    width: 800px;
    text-align: center;
    /*居中*/
}

th,
td {
    border: 1px solid gray;
    border: none;
    /*去除默认边框*/
    border-bottom: 1px solid gray;
}

thead th {
    background-color: black;
    color: white;
}

tbody tr:nth-child(2n) {
    background-color: gray;
    cursor: pointer;
}

tbody tr:nth-child(2n-1) {
    background-color: rgb(151, 82, 82);
    cursor: pointer;
    /*鼠标放上去后变成小手*/
}
</style>