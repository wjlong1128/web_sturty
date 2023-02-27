class MyClass  {
    #name = 'private'
    getName(){
        return this.#getPrivateName()
    }
    #getPrivateName(){
        return this.#name
    }    
    
    get pname(){
        return this.#name;
    }
    
    set pname(name) {
        this.#name = name;
    }
}

let cls = new MyClass()

console.log(cls.getName());

cls.pname = 'a'
console.log(cls.pname);
// console.log(cls.#getPrivateName());