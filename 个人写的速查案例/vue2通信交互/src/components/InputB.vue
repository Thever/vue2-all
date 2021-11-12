<template>
  <div>
    <input type="text" placeholder="InputB请输入内容" v-model="content">
    <hr>
  </div>
</template>

<script>
export default {
  name: 'InputB',
  data(){
    return{
      content:''
    }
  },
  mounted(){
    console.log('InputB mounted')
  },
  activated(){
    console.log('InputB activated')  
  },
  deactivated(){
    console.log('InputB deactivated')  
  }
}
</script>

<style scoped>

</style>
