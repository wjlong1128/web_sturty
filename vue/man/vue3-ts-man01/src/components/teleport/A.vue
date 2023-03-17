<template>
    <div class="dialog">
        <header class="header">
            <div>我是弹框</div>
        </header>

        <main class="main">
            我是内容
        </main>

        <footer class="footer">
            <button>取消</button>
            <button>确定</button>
        </footer>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="less" scoped>
.dialog {
    width: 400px;
    height: 400px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    left: 50%;
    top: 50%;
    margin-left: -200px;
    margin-top: -200px;
    background-color: #ccc;
    .header {
        flex:1;
        color:#cfd3dc;
        padding: 10px;
        display: flex;
        border-bottom: 1px solid #000;
        justify-content: space-between;
    }
    .main {
        flex:1,;
        padding: 10px;
    }
    
    .footer {
        border-top: 1px solid #000;
        padding: 10px;
       display: flex; 
       justify-content: end;
    }
    
}
</style>