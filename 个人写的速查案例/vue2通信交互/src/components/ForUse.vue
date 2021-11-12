<template>
  <div>
    <p>这个组件用来给app.vue 通过refs来调用方法</p>
  </div>
</template>

<script>
export default {
  name: 'ForUse',
  methods:{
    useWay(params){
      console.log(`组件ForUse 的 useWay被调用了`)
      console.log(params)
    }
  }
}
</script>

<style scoped>

</style>
