<template>
  <div id="app">
    <!-- 使用一般组件 -->
    <Banner />
    <!-- 导航区 -->
    <!-- 字符串导航 -->
    <!-- <router-link active-class="active" to="/home">查看home</router-link> -->
    <!-- 命名路由 -->
    <router-link active-class="active" :to="{name:'shouye'}">默认push模式查看home</router-link>
    <p @click='goHome'>点击使用编程式路由push模式访问home</p>
    <br>
    <!-- <router-link :replace="true" active-class="active" :to="{name:'shouye'}">默认replace模式查看home,在history中替换最新记录,不产生后退记录</router-link>-->
    <!-- 属性简写 -->
    <router-link replace active-class="active" :to="{name:'shouye'}">默认replace模式查看home,在history中替换最新记录,不产生后退记录</router-link>
    <p @click='replaceHome'>点击使用编程式路由replace模式访问home</p>
    <br>
    <router-link active-class="active" to="/about">查看about</router-link>
    <br>
    <router-link active-class="active" to="/propslist">查看propslist</router-link>
    <br></br>
    <!-- 内容区 -->
    <router-view></router-view>
  </div>
</template>

<script>
import Banner from './components/Banner'
export default {
  name: 'App',
  components:{
    Banner
  },
  methods:{
    goHome(){
      //  只有地址无参数可以简写
      //  this.$router.push('/home')
      //  完成样式传参和to的对象写法一样
      this.$router.push({
        path:'/home'
      })
    },
    replaceHome(){
      this.$router.replace({
        path:'/home'
      })
    }
  }
}
</script>

<style>
  a{
    text-decoration: none;
  }
  .active{
    text-decoration:none;
    color:blue;
  }
</style>
