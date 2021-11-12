<template>
  <div>
    <p>作用域插槽</p>
    <slot :game="game" :msg="msg">这里是作用域插槽内的默认内容</slot>
  </div>
</template>

<script>
export default {
  name: 'MyScopeSlot',
  data(){
    return{
      game:['怪物猎人:崛起','地狱老司机','双人成行','暗黑地牢2'],
      msg:'作用域插槽可以让组件的使用者使用组件内的内容'
    }
  },
}
</script>

<style scoped>

</style>
