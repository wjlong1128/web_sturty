<template>
    <div>
        <Son>
            <!-- <template v-slot:default="data">haha</template> -->
            <!-- <template #default="{ son }">{{ son }}</template> -->
            <!-- 动态插槽 -->
            <template #[id]="{ son }"> {{ son }}</template>
        </Son>
        <button @click="change">change</button>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Son from './Son.vue';
const id = ref<string>('default')
const change = () => {
    id.value = id.value == 'default' ? 'noDefault' : 'default'
}
</script>