<template>
    <div>
        <div>这个是顶部页面组件</div>
        <br>
        <button @click="forward">前进</button>
        <button @click="back">后退</button>
        <button @click="go(2)">前进2</button>
        <button @click="go(-2)">后退2</button>
    </div>
</template>
<script>
export default {
    name:'Banner',
    methods:{
        forward(){
            console.log(`forward`)
            this.$router.forward()
        },
        back(){
            console.log(`back`)
            this.$router.back()
        },
        go(num){
            this.$router.go(num)
        }
    }
}
</script>
