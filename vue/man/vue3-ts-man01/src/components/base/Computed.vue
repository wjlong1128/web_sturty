<template>
    <div>
        <input v-model="firstName" type="text" placeholder="firstName">
        <input v-model="lastName" type="text" placeholder="lastName">
        <hr>
        {{ fullName }}
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { ref } from 'vue';

const firstName = ref<string>('')
const lastName = ref<string>('')
// const fullName = computed(() => {
//     return firstName.value + lastName.value
// })

const fullName = computed<string>({
    // getter
    get() {
        return firstName.value + ' ' + lastName.value
    },
    // setter
    set(newValue) {
        // 注意：我们这里使用的是解构赋值语法
        [firstName.value, lastName.value] = newValue.split(' ')
    }
})
</script>