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

        <p class="size_22 margin_26_0_16">文字按钮</p>
        <div class="mainBorder">
            <h-button type='text1'>文字按钮1</h-button>
            <h-button type='text2'>文字按钮2</h-button>
        </div>
        <arrow :code="code4"></arrow>
        <br><br>
        <h3 class="attr">属 性</h3>
        <h-table :data="list1" class="h-table"></h-table>
        
    </div>
</template>
<script> 
    export default {
        name:'showButton',
        data() {
            return {
                list1:[
                    {
                        param: 'size',
                        description: '大小',
                        type: 'string',
                        value: 'big / mudium / small',
                        default:'big'
                    },
                    {
                        param: 'type',
                        description: '类型',
                        type: 'string',
                        value: 'yellow / blue / green / deep / red',
                        default:'—'
                    },
                    {
                        param: 'plain',
                        description: '是否浅色背景',
                        type: 'boolean',
                        value: '—',
                        default:'false'
                    },
                    {
                        param: 'round',
                        description: '是否圆角按钮',
                        type: 'boolean',
                        value: '—',
                        default:'false'
                    },
                    {
                        param: 'circle',
                        description: '是否圆形按钮',
                        type: 'boolean',
                        value: '—',
                        default:'false'
                    },
                    {
                        param: 'disabled',
                        description: '是否禁用状态',
                        type: 'boolean',
                        value: '—',
                        default:'false'
                    },  
                ],
                code1:{html:
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
        <h-button round>白色</h-button>
        <h-button round type='yellow'>黄色</h-button>
        <h-button round type='blue'>蓝色</h-button>
        <h-button round type='green'>绿色</h-button>
        <h-button round type='deep'>灰黑</h-button>
        <h-button round type='red'>红色</h-button>
        `},
                code2:{html:
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
        `},
                code3:{html:
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
        `},
                code4:{html:
        `
        <h-button type='text1'>文字按钮1</h-button>
        <h-button type='text2'>文字按钮2</h-button>
        `}
            }
        },
        methods: {
            
        },
    }
</script>