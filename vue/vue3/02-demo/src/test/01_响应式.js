import {ref,reactive} from 'vue'

let count = ref(0)

// console.log(count)

let person = ref({
    name:'zhangsan',
    age:18
})

console.log(person.value.name)