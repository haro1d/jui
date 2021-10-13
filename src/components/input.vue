<template>
    <div>
        <p class="size_28">Input 输入框</p>
        <p class="margin_4_0">常见的输入框</p>

        <p class="size_22 margin_26_0_16">基础用法</p>

        <div class="mainBorder">
            <h-input  model="value" placeholder="请输入"></h-input>
        </div>
        <arrow :code="code1"></arrow>

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
                value:'',
                list1:[
                    {
                        param: 'v-model / :value',
                        description: '绑定值',
                        type: 'string/number',
                        value: '—',
                        default:'—'
                    },
                    {
                        param: 'placeholder',
                        description: '输入框默认提示文本',
                        type: 'string',
                        value: '—',
                        default:'—'
                    },
                    {
                        param: 'disabled',
                        description: '禁用',
                        type: 'boolean',
                        value: '—',
                        default:'false'
                    }, 
                ],
                code1: {
        html: `
    <h-input v-model="value" placeholder="请输入"></h-input>`,
        javascript: `
    export default {
      data() {
        return {
          value: ""
        }
      }
    }
        `,
      },

            }
        },
        methods: {
            
        },
    }
</script>