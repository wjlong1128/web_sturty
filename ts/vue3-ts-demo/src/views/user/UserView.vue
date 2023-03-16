<template>
  <div>
    <h1>用户列表</h1>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { getUsers, getRoles } from "@/request/index";

const getUserList = async()=>{
    const result = await getUsers()
    console.log(`usersx${result} }`);
};

const getRoleList = async()=>{
    const result = await getRoles()
    console.log(`rolesx${result}`);
};

onMounted(() => {
    getUserList()
    getRoleList()
});
</script>
