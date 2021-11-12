import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//  全局引入使用Element
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)

//  按需引入Element组件
import {Row, Button, DatePicker} from 'element-ui';
Vue.component(Row.name, Row);
Vue.component(Button.name, Button);
Vue.component(DatePicker.name, DatePicker);
new Vue({
  el:'#app',
  render: h => h(App),
})
