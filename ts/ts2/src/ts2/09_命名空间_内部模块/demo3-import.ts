namespace MyNameSpace {
  export interface MyInter {
    name: string
  }
  export namespace Emb {
    export const str: string = '123'
  }
}

import Inter = MyNameSpace.MyInter

let inter: Inter = { name: 'zhangsan' }
console.log(MyNameSpace.Emb.str);
