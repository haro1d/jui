<template>
    <div>
        <div class="hide_show" @click="show = !show">
            <span class="edg1" :class="[show?'':'edg2']"></span>
            <span class="hide_show_in">
                <span v-show="show">显示代码</span>
                <span v-show="!show">隐藏代码</span>
            </span>  
        </div>
        <div class="textBox" :class="[show?'':'textBox2']">
            <!-- <pre v-highlightjs="code"><code class="html"></code></pre> -->
            <pre v-highlightjs="code.html"><code class="html" v-if="code.html"></code></pre>
            <pre v-highlightjs="code.javascript" v-if="code.javascript"><code class="javascript"></code></pre>
        </div>
    </div>
    
</template>
<script>
    export default {
        name:'arrow',
        props:{
            code: {
                type: [Object,String],
                // required: true,
                },
        },
        data() {
            return {
                show:true,
                codeboxHeight:0,
                height:'0px',
            }
        },
        watch:{
            show(newVal,oldVal){
                this.codeboxHeight = newVal?'0px':'auto'
            }
        }
    }
</script>
<style scoped>

</style>