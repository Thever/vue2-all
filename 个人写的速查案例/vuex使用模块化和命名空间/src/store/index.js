//  该文件用于创建vuex中最为核心的store
import Vue from 'vue'
import Vuex from 'vuex'

//  new vuex 实例前需要 vue 先使用 vuex
//  脚手架会扫描优先执行import语句，再依次执行其他代码
Vue.use(Vuex)

//	导入外部模块
import number from './number.js'
import list from './list.js'

//  创建并暴露store
export default new Vuex.Store({
	modules:{
		// number:number,
		// list:list
		number,
		list
	}
})

