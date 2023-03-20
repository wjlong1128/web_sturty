<template>
    <div>
        <button class="mybutton">
            <slot>
            button
            </slot>
        </button>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.mybutton {
    width: 80px;
    height: 40px;
    outline: none;
    border: 1px solid skyblue;
}
</style>