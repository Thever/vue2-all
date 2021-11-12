<template>
  <div>
    <p style="color:red;">获取到的word:{{word}}</p>
    <br>
    <p style="color:green;">用data属性处理后的的word:{{wordNew}}</p>
    <br>
    <button @click="use" style="background-color:red;">点我调用方法,查看打印内容</button>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'Props',
  props: ['word','propsMethod'],
  data(){
    return{
      wordNew:this.word + ',data增加了内容'
    }
  },
  methods:{
    use(){
      this.propsMethod(1,2,3,4)
    }
  }
}
</script>

<style scoped>

</style>
