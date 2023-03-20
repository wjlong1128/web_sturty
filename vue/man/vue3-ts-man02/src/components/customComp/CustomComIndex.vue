<template>
    <div>
        <wjl-button>yyhuiyhu</wjl-button>
    </div>
</template>

<script lang="ts" setup>
import { defineCustomElement } from 'vue'
import wjlButtonCe from './wjl-button.ce.vue';
const wjlButton = defineCustomElement(wjlButtonCe)
window.customElements.define('wjl-button',wjlButton)

;(()=>{
    
})()
</script>

<style></style>