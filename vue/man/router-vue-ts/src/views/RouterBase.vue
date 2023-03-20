<template>
    <div>
      <button @click="router.forward()" >前进</button>
      <button @click="router.back()" >后退</button>
      <h1>App</h1>
      <hr>
      <div>
        <!-- a标签会刷新页面 而router-link 不会 -->
        <RouterLink to="/login">Login</RouterLink>
  
        <RouterLink :to="{
          name: 'reg'
        }">Registry</RouterLink>
  
      </div>
      <hr>
      <h2>编程式导航</h2>
      <button @click="toPage('/login')">login</button>
      <button @click="toPage('reg')">login</button>
      <hr>
      <div style="border:1px solid #ccc;width:500px;height: 500px;">
        <RouterView />
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { useRouter } from 'vue-router';
  const router = useRouter()
  const toPage = (path: string) => {
    if (path[0] === '/'){
      router.push(path)
    }else {
      router.push({name:path})
    }
  }
  
  </script>
  
  <style>
  a {
    display: inline-block;
    padding: 0px 20px;
    width: 50px;
    height: 20px;
    text-align: center;
    line-height: 20px;
  }
  </style>