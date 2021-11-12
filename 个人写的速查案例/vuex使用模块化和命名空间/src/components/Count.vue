<template>
	<div>
		<p>当前vuex中number模块的num值为：{{this.$store.state.number.num}} or {{num}}</p>
		<br>
		<p>当前vuex中number模块的num值的10倍为：{{this.$store.getters['number/numBig']}} or {{numBig}}</p>
		<br>
		<button @click="add(1)">点我number+1</button>
		<button @click="min(1)">点我number-1</button>
		<hr>
	</div>
</template>

<script>
	//	导入vuex中封装的方法
	import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
	export default {
		name:'useNumber',
		data() {
			return {

			}
		},
		methods: {
			...mapActions('number',['numAdd','numMin']),
			...mapMutations('number',['add','min'])
		},

		// computed用来获取store中的内容
		computed:{
			...mapState('number',['num']),
			...mapGetters('number',['numBig'])
		}
	}
</script>

<style lang="css">
	button{
		margin-left: 5px;
	}
</style>
