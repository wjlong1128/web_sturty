// 方式1
// export default function () {
//     return (
//     <div>
//         <h1>Hello World</h1>
//     </div>
//     )
// }

// 方式2
// export default defineComponent({
//     data(vm) {
//        return {
//         age:18
//        }
//     },

//     render(){
//         return (
//             <h1>今年{this.age}岁</h1>
//         )
//     }
// })

import { reactive } from "vue";
import { ref } from "vue";
import { defineComponent } from "vue";

interface PropsType {
  name?: string;
}

// 插槽函数
const A = (_:any,{solts}:any)=>{
    return (
        <div>{solts?.default ? solts.default() : "默认值hi"}</div>
    )
}

export default defineComponent({
  props: {
    name: String,
  },
  emits: ["on-click"],
  setup(props: PropsType, { emit }) {
    const age = ref(0);
    const ul = reactive({
      name: "zhangsan",
      age: 18,
    });
    function incr(name: string) {
      age.value++;
      console.log(name);
    }
    const send = (value: any) => {
      emit("on-click", value);
    };
    
    const solts = {
        default:()=>(<div>函数default</div>)
    }
    return () => {
      return (
        <div>
          <h1>name: {props?.name}</h1>
          <h1p>今年{age.value}岁</h1p>
          {/* 让其函数柯里化 */}
          <button onClick={() => incr("zhangsan")}>点击</button>
          <hr />
          <div>
            <ul>
              {Object.keys(ul).map((k: string) => {
                return (
                  <li>
                    {/* {ul[k]}{" "} */}
                    {/* <button onClick={() => send(ul[k])}> */}
                      点击给父组件传送属性
                    {/* </button> */}
                  </li>
                );
              })}
            </ul>
            
            <A v-slot={solts}></A>
          </div>
        </div>
      );
    };
  },
});
