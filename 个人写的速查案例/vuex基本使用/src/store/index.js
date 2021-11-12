//  该文件用于创建vuex中最为核心的store
import Vue from 'vue'
import Vuex from 'vuex'

//  new vuex 实例前需要 vue 先使用 vuex
//  脚手架会扫描优先执行import语句，再依次执行其他代码
Vue.use(Vuex)

//准备actions——用于响应组件中的动作
const actions = {
	/* jia(context,value){
		console.log('actions中的jia被调用了')
		context.commit('JIA',value)
	},
	jian(context,value){
		console.log('actions中的jian被调用了')
		context.commit('JIAN',value)
	}, */
	jiaOdd(context,value){
		console.log('actions中的jiaOdd被调用了')
		if(context.state.sum % 2){
			context.commit('JIA',value)
		}
	},
	jiaWait(context,value){
		console.log('actions中的jiaWait被调用了')
		setTimeout(()=>{
			context.commit('JIA',value)
		},500)
	}
}
//准备mutations——用于操作数据（state）
const mutations = {
	JIA(state,value){
		console.log('mutations中的JIA被调用了')
		state.sum += value
	},
	JIAN(state,value){
		console.log('mutations中的JIAN被调用了')
		state.sum -= value
	}
}
//准备state——用于存储数据
const state = {
	sum:0, //当前的和，
	//	用来演示mapState
	userName:'子安武人',
	userAge:30,
	userSchool:'社会大学'
}

//getters用来处理state返回需要的内容
const getters  = {
	bigSum(state){
		return state.sum*10
	}
}
//  创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
	getters
})

