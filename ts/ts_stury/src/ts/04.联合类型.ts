function counter(count: string | number) {
    console.log(`The current count is: ${count}.`);
}

counter('1')
counter(2)
// 再举个例子，是用 Vue 做页面，会涉及到子组件或者 DOM 的操作，
// 当它们还没有渲染出来时，获取到的是 null ，渲染后才能拿到组件或者 DOM 结构，这种场景也可以使用联合类型：
// const ele: HTMLElement | null = document.getElementById('root')
