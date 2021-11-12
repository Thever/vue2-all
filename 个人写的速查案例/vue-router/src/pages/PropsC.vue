<template>
    <div>
        <p>propsC传入的id:{{id}}</p>
        <p>propsC传入的title:{{title}}</p>
        <p>propsC传入的test1:{{test1}}</p>
        <p>propsC传入的test2:{{test2}}</p>
    </div>
</template>
<script>
export default {
    name:'PropsC',
    props:['id','title','test1','test2'],
    mounted(){
        console.log(this.$route)
        console.log(this)
    }
}
</script>