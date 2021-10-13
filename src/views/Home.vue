<template>
  <div id="home">
    <div class="head">
      <h1>-UI</h1>
    </div>
    <div class="main">
      <div class="left">
        <ul >
          <li v-for="(item,index) in menuList" :key="item.id" class="li_title" >
            {{item.label}}
            <ul >
              <li v-for="(item2,index2) in item.children" :key="item2.id" class="li_subTitle" @click="$router.push(item2.path)">
                {{item2.label}}
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return{
      menuList:[
        {
          id:1,
          label:'开发指南',
          children:[
            {
              id:1-1,
              label:'安装',
              path:'/components'
            },
          ]
        },
        {
          id:2,
          label:'组件',
          children:[
            {
              id:2-1,
              label:'button 按钮',
              path:'/components/button'
            },
            {
              id:2-2,
              label:'input 输入框',
              path:'/components/input'
            }
          ]
        }
      ]
    }
  }
}
</script>
<style scoped>
  ::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
    background   : #7e7e7e;
}
::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background   : #ededed;
}
</style>