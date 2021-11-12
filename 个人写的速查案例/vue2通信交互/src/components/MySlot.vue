<template>
  <div>
    <p>默认插槽</p>
    <slot>这里是默认插槽内的默认内容</slot>
  </div>
</template>

<script>
export default {
  name: 'MySlot',
  data(){
    return{
      game:['怪物猎人:崛起','地狱老司机','双人成行','暗黑地牢2']
    }
  },
}
</script>

<style scoped>

</style>
