<template>
    <div>
        <p class="size_28">安装</p>

        <p class="size_22 margin_26_0_16">npm 安装</p>
        <p class="margin_4_0">推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。</p>
        <pre v-highlightjs="code1.html"><code class="npm" ></code></pre>
        <br><br><br>
        <p class="size_28">快速上手</p>

        <p class="size_22 margin_26_0_16">完整引入</p>
        <p class="margin_4_0">在 main.js 中写入以下内容：</p>
        <pre v-highlightjs="code2.javascript"><code class="javascript" ></code></pre>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                code1:{
                    html:
        `
        npm i jui0 -S
        `
                },
                code2:{
                    javascript:
        `
        import jui from 'jui0'
        import "jui0/lib/jui0.css"

        Vue.use(jui)

        new Vue({
            el: '#app',
            render: h => h(App)
        })
        `
                }
            }
        },
    }
</script>