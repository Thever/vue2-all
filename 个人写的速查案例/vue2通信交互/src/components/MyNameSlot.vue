<template>
  <div>
    <p>具名插槽</p>
    <slot name="header">这里是具名插槽header内的默认内容</slot>
    <slot name="footer">这里是具名插槽footer内的默认内容</slot>
  </div>
</template>

<script>
export default {
  name: 'MyNameSlot',
  data(){
    return{
      game:['怪物猎人:崛起','地狱老司机','双人成行','暗黑地牢2']
    }
  },
}
</script>

<style scoped>

</style>
