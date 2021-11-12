<template>
	<div class="container">

		<Category title="游戏">
			<!-- template包裹slot内容后设置scope,设置名称.games就可以获取到插槽内部设置的属性games-->
			<template scope="atguigu">
				<ul>
					<li v-for="(g,index) in atguigu.games" :key="index">{{g}}</li>
				</ul>
			</template>
		</Category>

		<Category title="游戏">
			<!-- 通过解构赋值获取对应属性 -->
			<template scope="{games,msg}">
				<ol>
					<li style="color:red" v-for="(g,index) in games" :key="index">{{g}}</li>
				</ol>
				<h4>{{msg}}</h4>
			</template>
		</Category>

		<Category title="游戏">
			<!-- scope旧API, slot-scope新api，都可以使用-->
			<template slot-scope="{games}">
				<h4 v-for="(g,index) in games" :key="index">{{g}}</h4>
			</template>
		</Category>

	</div>
</template>

<script>
	import Category from './components/Category'
	export default {
		name:'App',
		components:{Category},
	}
</script>

<style scoped>
	.container,.foot{
		display: flex;
		justify-content: space-around;
	}
	h4{
		text-align: center;
	}
</style>
