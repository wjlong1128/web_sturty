<template>
    <div>
        <h2>儿子</h2>
        <div class="box"></div>
        <hr>
        <ProvideB></ProvideB>
    </div>
</template>

<script lang="ts" setup>
import { inject, ref, Ref } from 'vue';
import ProvideB from './ProvideB.vue';
const colorVal = inject<Ref<string>>('color', ref('white'))
</script>

<style scoped>
.box {
    border: 1px black solid;
    width: 100px;
    height: 100px;
    background-color: v-bind(colorVal);
}
</style>