<template>
  <div>
    <p>组件user</p>
  </div>
</template>

<script>
import PubSub from "pubsub-js"
export default {
  name: 'User',
  methods:{
    listenMessage(...params){
      console.log('已获取消息 message')
      console.log(params)
    }
  },
  mounted(){
    //  订阅频道 message,并传入处理方法
    this.PubId = PubSub.subscribe('message', this.listenMessage)
    // PubSub.subscribe('message', this.listenMessage)
  },
  beforeDestroy(){
    PubSub.unsubscribe('message')
  }
}
</script>

<style scoped>

</style>
