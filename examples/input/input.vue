<template>
    <div>
        <input type="text" v-model="x"></input>
    </div>
</template>
<script>
    export default {
        name: 'HInput',
        data() {
            return {
                x:'测试的输入框'
            }
        },
    }
</script>