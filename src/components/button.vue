<template>
    <div>
        <p class="size_28">Button 按钮</p>
        <p class="margin_4_0">常用的操作按钮</p>

        <p class="size_22 margin_26_0_16">基础用法</p>

        <div class="mainBorder">
            <h-button>白色</h-button>
            <h-button type='yellow'>黄色</h-button>
            <h-button type='blue'>蓝色</h-button>
            <h-button type='green'>绿色</h-button>
            <h-button type='deep'>灰黑</h-button>
            <h-button type='red'>红色</h-button>
            <br><br>
            <h-button plain>浅色白色</h-button>
            <h-button plain type='yellow'>浅色黄色</h-button>
            <h-button plain type='blue'>  浅色蓝色</h-button>
            <h-button plain type='green'> 浅色绿色</h-button>
            <h-button plain type='deep'>  浅色灰黑</h-button>
            <h-button plain type='red'>   浅色红色</h-button>
            <br><br>
            <h-button round>圆角白色</h-button>
            <h-button round type='yellow'>圆角黄色</h-button>
            <h-button round type='blue'>  圆角蓝色</h-button>
            <h-button round type='green'> 圆角绿色</h-button>
            <h-button round type='deep'>  圆角灰黑</h-button>
            <h-button round type='red'>   圆角红色</h-button>
            <br><br>
        </div>
        <arrow :code="code1"></arrow>

        <p class="size_22 margin_26_0_16">禁用状态</p>
        <div class="mainBorder">
            <h-button disabled>已禁用</h-button>
            <h-button disabled type='yellow'>已禁用</h-button>
            <h-button disabled type='blue'>已禁用</h-button>
            <h-button disabled type='green'>已禁用</h-button>
            <h-button disabled type='deep'>已禁用</h-button>
            <h-button disabled type='red'>已禁用</h-button>
            <br><br>
            <h-button disabled circle></h-button>
            <h-button disabled circle type='yellow'></h-button>
            <h-button disabled circle type='blue'></h-button>
            <h-button disabled circle type='green'></h-button>
            <h-button disabled circle type='deep'></h-button>
            <h-button disabled circle type='red'></h-button>
        </div>
        <arrow :code="code2"></arrow>

        <p class="size_22 margin_26_0_16">不同尺寸</p>
        <div class="mainBorder">
            <h-button type='yellow'>不同尺寸</h-button>
            <h-button size="medium" type='yellow'>不同尺寸</h-button>
            <h-button size="small" type='yellow'>不同尺寸</h-button>
            <br><br>
            <h-button type='green'>不同尺寸</h-button>
            <h-button size="medium" type='green'>不同尺寸</h-button>
            <h-button size="small" type='green'>不同尺寸</h-button>
            <br><br>
            <h-button type='red'>不同尺寸</h-button>
            <h-button size="medium" type='red'>不同尺寸</h-button>
            <h-button size="small" type='red'>不同尺寸</h-button>
        </div>
        <arrow :code="code3"></arrow>
    </div>
</template>
<script> 
    export default {
        name:'showButton',
        data() {
            return {
                code1:
        `
        <h-button>白色</h-button>
        <h-button type='yellow'>黄色</h-button>
        <h-button type='blue'>蓝色</h-button>
        <h-button type='green'>绿色</h-button>
        <h-button type='deep'>灰黑</h-button>
        <h-button type='red'>红色</h-button>
        <br><br>
        <h-button plain>白色</h-button>
        <h-button plain type='yellow'>黄色</h-button>
        <h-button plain type='blue'>蓝色</h-button>
        <h-button plain type='green'>绿色</h-button>
        <h-button plain type='deep'>灰黑</h-button>
        <h-button plain type='red'>红色</h-button>
        <br><br>
        <h-button plain round>白色</h-button>
        <h-button plain round type='yellow'>黄色</h-button>
        <h-button plain round type='blue'>蓝色</h-button>
        <h-button plain round type='green'>绿色</h-button>
        <h-button plain round type='deep'>灰黑</h-button>
        <h-button plain round type='red'>红色</h-button>
        `,
                code2:
        `
        <h-button disabled>已禁用</h-button>
        <h-button disabled type='yellow'>已禁用</h-button>
        <h-button disabled type='blue'>已禁用</h-button>
        <h-button disabled type='green'>已禁用</h-button>
        <h-button disabled type='deep'>已禁用</h-button>
        <h-button disabled type='red'>已禁用</h-button>
        <br><br>
        <h-button disabled circle></h-button>
        <h-button disabled circle type='yellow'></h-button>
        <h-button disabled circle type='blue'></h-button>
        <h-button disabled circle type='green'></h-button>
        <h-button disabled circle type='deep'></h-button>
        <h-button disabled circle type='red'></h-button>
        `,
                code3:
        `
        <h-button type='yellow'>不同尺寸</h-button>
        <h-button size="medium" type='yellow'>不同尺寸</h-button>
        <h-button size="small" type='yellow'>不同尺寸</h-button>
        <br><br>
        <h-button type='green'>不同尺寸</h-button>
        <h-button size="medium" type='green'>不同尺寸</h-button>
        <h-button size="small" type='green'>不同尺寸</h-button>
        <br><br>
        <h-button type='red'>不同尺寸</h-button>
        <h-button size="medium" type='red'>不同尺寸</h-button>
        <h-button size="small" type='red'>不同尺寸</h-button>
        `
            }
        },
        methods: {
            
        },
    }
</script>