import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//  导入vue-router
import vueRouter from 'vue-router'
//  vue使用VueRouter
Vue.use(vueRouter)
//  导入 router 配置
import router from './router/index'

new Vue({
  render: h => h(App),
  //  使用router配置
  router
}).$mount('#app')
