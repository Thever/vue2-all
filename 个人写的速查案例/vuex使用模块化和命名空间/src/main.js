// import str1 from './test1'
// console.log(100)
// console.log(200)
// import str2 from './test2'
//  输出 test1 test2 100 200
//  原因:脚手架在运行时会先将所有的import引入扫描放到最前执行，随后再依次执行其他代码

import Vue from 'vue'
import App from './App.vue'
//  映入vuex配置文件
import store from './store'
Vue.config.productionTip = false

//  挂载使用
// new Vue({
//   render: h => h(App),
//   //  引入了vuex后可以设置store
//   store
// }).$mount('#app')

//  绑定元素对象使用
new Vue({
  el:'#app',
  render: h => h(App),
  //  引入了vuex后可以设置store
  store
})