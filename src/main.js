import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueHighlightJS from 'vue-highlightjs'
import examples from '../examples'
import arrow from './components/arrow'

// import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/styles/atom-one-light.css'
// import 'highlight.js/styles/googlecode.css'
// import 'highlight.js/styles/atelier-plateau-dark.css'
// import 'highlight.js/styles/ir-black.css'
// import 'highlight.js/styles/night-owl.css'
// import 'highlight.js/styles/idea.css'
import './assets/index.css'

Vue.use(examples)
Vue.use(VueHighlightJS)
Vue.config.productionTip = false

Vue.component(
  'arrow',arrow
)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
