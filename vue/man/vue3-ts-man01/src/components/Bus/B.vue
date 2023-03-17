<template>
<div>
<hr>
<h1>B </h1>
<hr>
</div>
</template>

<script lang="ts" setup>
import { Ref} from 'vue';
import Bus from '../../type/Bus'
Bus.on('on-click',(flag:Ref<Boolean>) =>{
    console.log('flag',flag);
})
</script>