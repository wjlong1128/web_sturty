function methodHello(target: any, name: string, desc: PropertyDescriptor) {
    console.log(`target ${target}`);
    console.log(`name ${name}`);
    console.log(`desc  ${desc.get}`);
}

class M {

    @methodHello
    sayHello(hi:string) {
        console.log('hello');
        return hi
    }
}

new M().sayHello('a')
new M().sayHello('a')