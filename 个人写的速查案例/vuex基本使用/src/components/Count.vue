<template>
	<div>
		<!-- 直接使用vuex中的数据，保持数据更新 -->
		<h1>当前求和为：{{$store.state.sum}}</h1>
		<!-- 初始化赋值后，不会自动更新数据，需要手动更新 -->
		<h1>当前求和为：{{myStore}}</h1>
		<!-- <h3>当前处理后的数据为:{{$store.getters.bigSum}}</h3> -->
		<select v-model.number="n">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<!-- mapActions,mapMutations 生成方法需要传入参数 -->
		<!-- 也可以再封装函数使用,传入必要的参数再调用，不过不推荐，效率低不如直接写this.$store.xx对应方法传入参数 -->
		<button @click="increment(n)">+</button>
		<button @click="decrement(n)">-</button>
		<button @click="incrementOdd(n)">当前求和为奇数再加</button>
		<button @click="incrementWait(n)">等一等再加</button>
		<hr>
		<!-- 演示mapState -->
		<p>用户名称:{{userName}}</p>
		<p>用户年龄:{{userAge}}</p>
		<p>用户学校:{{userSchool}}</p>
		<hr>
		<!-- mapState用对象写法更改使用的属性名 -->
		<p>用户名称:{{myName}}</p>
		<p>用户年龄:{{myAge}}</p>
		<p>用户学校:{{mySchool}}</p>
		<hr>
		<!-- mapGetters来获取getters中的属性 -->
		<p>this.$store.state.sum*10的值:{{bigSum}}</p>
		<p>this.$store.state.sum*10的值:{{sumAll}}</p>
		<hr>
	</div>
</template>

<script>
	//	导入vuex中封装的方法
	import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
	export default {
		name:'Count',
		data() {
			return {
				n:1, //用户选择的数字
				myStore:'', // 想要获取store中的内容
			}
		},
		methods: {
			// 手动封装方法
			// increment(){
			// 	this.$store.commit('JIA',this.n)
			// },
			// decrement(){
			// 	this.$store.commit('JIAN',this.n)
			// },
			// incrementOdd(){
			// 	this.$store.dispatch('jiaOdd',this.n)
			// },
			// incrementWait(){
			// 	this.$store.dispatch('jiaWait',this.n)
			// },
			/* ******************* */
			// mapMutations 生成 commit 方法
			// 对象写法
			...mapMutations({increment:'JIA', decrement:'JIAN'}),
			/*
			mapMutations 生成的方法，需要传入数值，默认提供事件传值
			increment(value){
				this.$store.commit('JIA',value)
			}
			*/
			// 数组写法其实不使用，一般为了表示可能会修改名称
			// ...mapMutations(['JIA','JIAN'])

			// mapActions 生成 dispatch 方法
			...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),
			/*
			mapActions生成的方法，需要传入数值，默认提供事件传值
			incrementOdd(value){
				this.$store.dispatch('jiaOdd',value
			*/
			// 一般也不会使用数组方法
			// ...mapActions(['incrementOdd','incrementWait'])

		},
		mounted() {
			console.log('Count',this)
			//	初始化赋值
			this.myStore = this.$store.state.sum
		},
		// computed用来获取store中的内容
		computed:{
			//	最简答的方式就是针对返回vuex中使用的属性
			// userName(){
			// 	return this.$store.state.userName
			// },
			// userAge(){
			// 	return this.$store.state.userAge
			// },
			// userSchool(){
			// 	return this.$store.state.userSchool
			// },
			//	使用vuex中的mapState来获取state的内容
			//	数组写法，直接使用属性名和属性值
			...mapState(['userName','userAge','userSchool']),
			//	对象写法，可以修改使用的属性名 {'指定新的属性名':'使用的属性名'}
			...mapState({myName:'userName',myAge:'userAge',mySchool:'userSchool'}),
			/* ********************************************************************************* */
			// 使用mapGetters来获取getters的内容
			// 数组写法
			...mapGetters(['bigSum']),
			// 对象写法
			...mapGetters({sumAll:'bigSum'})
		}
	}
</script>

<style lang="css">
	button{
		margin-left: 5px;
	}
</style>
