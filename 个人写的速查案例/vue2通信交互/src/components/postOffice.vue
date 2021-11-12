<template>
  <div>
    <p>组件 postOffice</p>
    <button @click="sendMessage">点我给user发送消息</button>
  </div>
</template>

<script>
import PubSub from "pubsub-js"
export default {
  name: 'postOffice',
  methods:{
    sendMessage(){
      console.log(`postOffice组件准备向 message 频道发送消息`)
      //  推送消息(频道名，消息)
      PubSub.publish('message', 'postOffice 给 user 发送了一条消息')
    }
  }
}
</script>

<style scoped>

</style>
