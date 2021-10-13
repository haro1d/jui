import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/components'
    },
    {
      path: '/components',
      name: 'home',
      component: Home,
      children:[
        {
          path:'/',
          name:'start',
          component: () => import('./views/start.vue')
        },
        {
          path: '/components/button',
          name: 'button',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './components/button.vue')
        },
        {
          path: '/components/input',
          name: 'input',
          component: () => import('./components/input.vue')
        }
      ]
    },
    
  ]
})
