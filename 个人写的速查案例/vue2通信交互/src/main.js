import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate(){
    //  安装事件总线,赋予$on,$off等一系列方法
    Vue.prototype.$event = this
  }
}).$mount('#app')
