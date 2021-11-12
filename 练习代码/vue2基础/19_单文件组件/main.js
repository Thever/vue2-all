//	浏览器不支持import引入
import App from './App.vue'

new Vue({
	el:'#root',
	// 替换#root中的内部内容为 <App></App>，不需要再根容器中使用标签了
	template:`<App></App>`,
	components:{App},
})