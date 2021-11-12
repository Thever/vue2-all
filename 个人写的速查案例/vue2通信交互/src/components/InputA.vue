<template>
  <div>
    <input type="text" placeholder="InputA请输入内容" v-model="content">
    <hr>
  </div>
</template>

<script>
export default {
  name: 'InputA',
  data(){
    return{
      content:''
    }
  },
  mounted(){
    console.log('InputA mounted')
  },
  activated(){
    console.log('InputA activated')  
  },
  deactivated(){
    console.log('InputA deactivated')  
  }
}
</script>

<style scoped>

</style>
