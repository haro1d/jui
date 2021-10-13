<template>
    <div>
        <table cellspacing="0">
            <!-- 接收数据 -->
            <div class="hidden-columns">
              <slot></slot>
            </div>
            <!-- 标题行 -->
            <!-- <tr>
              <th v-for="column in columns" :key="column.key" :width="`${column.width}px`">{{column.label}}</th>
            </tr> -->
            <!-- <tr class="contentTr" v-for="(row,index) in data" :key="index">
              <td v-for="column in columns" :key="column.key" :width="`${column.width}px`">
                <div v-if="!column.slot">{{row[column.prop]}}</div>
              </td>
            </tr> -->
            <tr>
              <th v-for="(item,index) in header" :key="index" >{{item}}</th>
            </tr>
            <tr class="contentTr" v-for="(item,index) in data" :key="index">
              <td v-for="(column,index2) in item" :key="index2" >
                {{column}}
              </td>
            </tr>
        </table>
    </div>
</template>
<script>
    export default {
        name:'HTable',
        props:{
            data: {
                type: Array,
                default: function() {
                    return [];
                }
            },   
            header:
            {
                type:Array,
                default:function() {
                    return ['参数','说明','类型','可选值','默认']
                }
            }       
        },
        data() {
            return {
                
            }
        },
        methods: {
            test(){
    
            }
        },
    }
</script>
<style lang="less" scoped>

    table {
    width: 100%;
    td,
    th {
        padding: 15px 10px;
        border-bottom: solid 1px #ddd;
        text-align: left;
    }
    th {
        color: #909399;
        font-size: 14px;
    }
    .contentTr {
        color:gray;
        font-size: 14px;
        &:hover {
        background-color: #f5f7fa;
        }
    }
    }

</style>