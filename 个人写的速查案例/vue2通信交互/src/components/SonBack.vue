<template>
  <div>
    <button @click="use" style="background-color:#d8d8d8;">点我通过自定义事件，调用父组件方法</button>
    <button @click="unbind" style="background-color:#d8d8d8;">点我取消自定义事件绑定</button>
    <button @click="destroy" style="background-color:#d8d8d8;">点我消除实例</button>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'Emit',
  data(){
    return{

    }
  },
  methods:{
    //  调用自定义事件的传入方法
    use(){
      this.$emit('wzw',1,2,3,4,5,6)
    },
    //  消除事件绑定
    unbind(){
      console.log('取消绑定的自定义事件wzw')
      this.$off('wzw')
      // this.$off()
    },
    //  消除实例
    destroy(){
      console.log('消除实例')
      this.$destroy()
    }
  }
}
</script>

<style scoped>

</style>
