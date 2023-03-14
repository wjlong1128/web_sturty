// interface Reader {
//     name: string,
//     id: number,

//     getName(): string,
//     getId(): number,
//     onRead(): void
// }


// class Phone implements Reader {
//     name: string;
//     id: number;
//     constructor(name: string, id: number) {
//         this.name = name
//         this.id = id
//     }
//     getName(): string {
//         return this.name
//     }
//     getId(): number {
//         return this.id
//     }
//     onRead(): void {
//         console.log(`name:${this.name}  id:${this.id} `);
//     }
// }

// const phone = new Phone('zhangsan',2)

// console.log(phone.getName());
// console.log(phone.getId());
// phone.onRead()
