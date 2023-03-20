<template>
    <div>
        <img id="yongzhuang" src="/yongzhuang.jpg" alt="">
        <p v-text="url" style="width: 200px;height:500px; border: 1px solid black; white-space: normal;word-break:keep-all;">
            
        </p>
        
        <div> 
            {{  }}
        </div>
        <!-- {{ $attrs.title }} -->
    </div>
</template>

<script lang="ts" setup>
// import { useAttrs, useSlots } from 'vue'
import { ref } from 'vue';
import ImgBase64 from '../../hooks'
import { getCurrentInstance } from 'vue';
const url = ref('')
ImgBase64({
    el: '#yongzhuang'
}).then(res => {
    url.value = res.base64Url
})

const str = getCurrentInstance()?.proxy?.$filter(' zhang san  ')
console.log(str);
</script>

<style lang="less">
img {
    width: 200px;
}
</style>