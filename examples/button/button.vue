<template>
    <button class="hButton" :disabled="disabled" :class='[
        `hButton-${type}`,`${size}`,
        {"is-plain":plain},
        {"is-round":round},
        {"is-circle":circle},
        {"is-disabled":disabled}]'
        @click="handleClick">
        <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>
<script>
export default {
    name: 'HButton',
    // prop校验，无需校验可传入数组
    props: {
        size:{
            type:String,
            default:'big'
        },
        type: {
            type: String,
            default: 'default'
        },
        plain: {
            type: Boolean,
            default: false
        },
        round: {
            type: Boolean,
            default: false
        },
        circle: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
    },
    methods: {
        handleClick (e) {
            // 此处的事件名要和子组件的事件名一致
            this.$emit('click', e)
        }
    },
    created () {
        // 获取插槽内容
        // console.log(this.$slots)
    }
}
</script>

<style lang="less" scoped>
    /* // 默认样式 */
    .hButton{
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        border: 1px solid #dcdfe6;
        color: #606266;
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        transition: 0.1s;
        font-weight: 500;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        padding: 12px 20px;
        font-size: 14px;
        border-radius: 4px;
        outline: none;
        &:hover,
        &:focus{
            color: #6e6e6e;
            border-color: #b6b6b6;
            background-color: #fffeec;
        }
    }
    /* // 各种类型样式 */
    .hButton-yellow{
        color: #606266;
        background-color: #ffde24;
        border-color: #ffe96d;
        margin-left: 20px;
        &:hover,
        &:focus{
            color: #606266;
            background: #ffee00;
            border-color: #ebde70;
        }
    }
    .hButton-blue{
        color:#fff;
        background-color: #409eff;
        border-color: #409eff;
        margin-left: 20px;
        &:hover,
        &:focus{
            background: #66b1ff;
            border-color: #66b1ff;
            color: #fff;
        }
    }
    .hButton-green{
        color:#fff;
        background-color: #67c23a;
        border-color: #67c23a;
        margin-left: 20px;
        &:hover,
        &:focus{
            background: #85ce61;
            border-color: #85ce61;
            color: #fff;
        }
    }
    .hButton-deep{
        color:#fff;
        background-color: #37383a;
        border-color: #9a9ca1;
        margin-left: 20px;
        &:hover,
        &:focus{
            background: #68696b;
            border-color: #9b9da0;
            color: #fff;
        }
    }
    .hButton-red{
        color:#fff;
        background-color: #f56c6c;
        border-color: #f56c6c;
        margin-left: 20px;
        &:hover,
        &:focus{
            background: #f78989;
            border-color: #f78989;
            color: #fff;
        }
    }

    /* // 各种类型朴素样式 */
    .hButton.is-plain{
        &:hover,
        &:focus{
            background: #fff;
            border-color: #b6b6b6;
        }
    }
    .hButton-yellow.is-plain{
        color: #eeae00;
        background-color: #fff8d3;
        border-color: #ffd000;
        margin-left: 20px;
        &:hover,
        &:focus{
            color: #606266;
            background-color: #ffde24;
            border-color: #ffe96d;
        }
    }
    
    .hButton-blue.is-plain{
        color: #409eff;
        background: #ecf5ff;
        margin-left: 20px;
        &:hover,
        &:focus{
            background: #409eff;
            border-color: #409eff;
            color: #fff;
        }
    }
    .hButton-green.is-plain{
        color: #58af2c;
        background: #d8f0cd;
        margin-left: 20px;
        &:hover,
        &:focus{
            background: #67c23a;
            border-color: #67c23a;
            color: #fff;
        }
    }
    .hButton-deep.is-plain{
        color: #646669;
        background: #d3d4d6;
        margin-left: 20px;
        &:hover,
        &:focus{
            background: #37383a;
            border-color: #909399;
            color: #fff;
        }
    }
    .hButton-red.is-plain{
        color: #f56c6c;
        background: #ffdcdc;
        margin-left: 20px;
        &:hover,
        &:focus{
            background: #f56c6c;
            border-color: #f56c6c;
            color: #fff;
        }
    }

    /* // 设置圆角 */
    .hButton.is-round{
        border-radius: 20px;
        padding: 12px 23px;
    }

    /* // 设置圆形 */
    .hButton.is-circle{
        border-radius: 50%;
        padding: 12px;
    }

    /* //设置disabled */
    .hButton.is-disabled{
        cursor: no-drop;
        opacity: 0.66;
    }
    .big {
        padding: 12px 20px;
        font-size: 14px;
    }
    .medium {
        padding: 10px 18px;
        font-size: 14px;
    }
    .small {
        padding: 9px 15px;
        font-size: 12px;
    }


</style>
