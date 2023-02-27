let person = {
    name: 'zhangsan',
    age: '18',
    get niling() {
        return this.age
    },
    get fullname() {
        return this.name;
    },
    set setName(name) {
        this.name = name
    },
    set setAge(age) {
        this.age = age
    }
}

person.setName = 'lisi'
console.log(person.fullname);


Object.defineProperty(person, 'get', {
    get: function () {
        return 'name: ' + this.name + ' age: ' + this.age
    }
})

console.log(person.get);

person[123] = 'aaa'
console.log(person);
