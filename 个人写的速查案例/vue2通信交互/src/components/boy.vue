<template>
  <div>
    <p>boy</p>
    <button @click="useGirl">点我调用girl里的方法</button>
  </div>
</template>

<script>
export default {
  name: 'Boy',
  methods:{
    boyDeal(...params){
      console.log('boy组件中的useBoy的方法被调用了')
      console.log(params)
    },
    useGirl(){
      console.log('准备调用使用事件总线来调用girl中的方法')
      this.$event.$emit('girl', 'hello, gril!')
    }
  },
  mounted(){
    this.$event.$on('boy', this.boyDeal)
  },
  beforeDestroy(){
    this.$event.$off('boy')
  }
}
</script>

<style scoped>

</style>
