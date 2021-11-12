<template>
	<div>
		<h3>当前vuex.state.list.number</h3>
		<ul>
			<li v-for="(item, index) in list" :key="index">{{item}}</li>
		</ul>
		<p>{{listWord}}</p>
		<button @click="add('添加')">数组添加</button>
		<button @click="min">数组删除</button>
		<hr>
	</div>
</template>

<script>
	//	导入vuex中封装的方法
	import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
	export default {
		name:'UseList',
		data() {
			return {}
		},
		methods: {
			...mapActions('list',['addList','minList']),
			...mapMutations('list',['add','min'])
		},
		computed:{
			...mapState('list',['list']),
			...mapGetters('list',['listWord'])
		}
	}
</script>

<style lang="css">
	button{
		margin-left: 5px;
	}
</style>
