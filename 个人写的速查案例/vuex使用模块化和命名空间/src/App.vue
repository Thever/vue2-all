<template>
  <div id="app">
    <h1>进行Vuex的使用</h1>
    <Count></Count>
    <List></List>
  </div>
</template>

<script>
import Count from './components/Count.vue'
import List from './components/List.vue'
export default {
  name: 'App',
  data(){
    return {
      name:'props来传入内容和方法',
      message:'默认值',
      keepaliveShow:'InputA'
    }
  },
  methods:{

  },
  components:{
    Count,
    List
  },
  mounted(){
    // console.log(this)
  }
}
</script>

<style>

</style>
