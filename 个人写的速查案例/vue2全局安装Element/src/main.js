import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//  全局引入使用Element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

new Vue({
  el:'#app',
  render: h => h(App),
})
