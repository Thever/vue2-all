<template>
  <div>
    <p>girl</p>
    <button @click="useBoy">点我调用boy里的方法</button>
  </div>
</template>

<script>
export default {
  name: 'Girl',
  methods:{
    girlDeal(...params){
      console.log(`girl 中的 girlDeal 方法被调用了 `)
      console.log(params)
    },
    useBoy(){
      console.log(`准备使用事件总线 来调用boy中的方法`)
      this.$event.$emit('boy','hello boy')
    }
  },
  mounted(){
    //  监听事件总线 girl 事件，使用grilDeal方法来接受参数处理
    this.$event.$on('girl',this.girlDeal)
  },
  beforeDestroy(){
    this.$event.$off('girl')
  }
}
</script>

<style scoped>

</style>
