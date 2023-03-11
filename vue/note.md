# Vue2

[官网](https://v2.cn.vuejs.org/)

## 1. 初始 Vue

```html
<!--view-->
<div id="root">{{name}}</div>

<script src="./vue2.js"></script>
<script>
  // MVVM
  // ViewModel
  const v = new Vue({
    // el: "#root",
    // Model
    data() {
      return {
        name: "张三",
      };
    },
  });

  setTimeout(() => {
    v.$mount("#root");
  }, 2000);
</script>
```
