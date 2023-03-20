class Btn extends HTMLElement {
    constructor() {
        super() // 确认继承关系
        // 样式隔离
        const shaDom = this.attachShadow({ mode: "open" })
        // this.wjl = this.h('p')
        // this.wjl.innerHTML= 'Hello'
        // this.wjl.setAttribute('style','width:200px;background-color:skyblue;')

        // shaDom.appendChild(this.wjl)
        this.template = this.h('template')
        this.template.innerHTML = `
            <style>
            div {
                height:200px;
                line-height:200px;
                width:200px;
                border:1px soild skyblue;
                background-color:#bfa;
                text-align:center;
            }
        </style>
        <div></div>
        `

        shaDom.appendChild(this.template.content.cloneNode(true))
    }
    h(el) {
        return document.createElement(el)
    }
}

window.customElements.define('wjl-p', Btn)