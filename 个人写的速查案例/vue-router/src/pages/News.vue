<template>
    <div>
        <p>news新闻页内容</p>
        <p :style="{opacity:myOpacity}">这个一个变化的文字</p>
        <!-- 生成导航 -->
        <ul>
            <li v-for="item in news" :key="item.id">
                <!-- 跳转路由并携带query参数，to的字符串写法 -->
                <!-- <router-link active-class="active" :to="`/about/news/detail?id=${item.id}&title=${item.title}`">{{item.title}}</router-link> -->
                <!-- 跳转路由并携带query参数，to的对象写法 -->
                <!-- <router-link active-class="active" :to="{
                    path:'/about/news/detail',
                    query:{
                        id:item.id,
                        title:item.title
                    }
                }">{{item.title}}</router-link> -->
                <!-- 使用命名路由来简化代码 -->
                <!-- <router-link active-class="active" :to="{
                    name:'xiangqing',
                    //path:'/about/news/detail',
                    query:{
                        id:item.id,
                        title:item.title
                    }
                }">{{item.title}}</router-link> -->
                <!-- 使用编程式路由实现 -->
                <p @click="goDetail(item)">{{item.title}}</p>
                <input type="text">
            </li>
        </ul>
        <!-- 显示内容 -->
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:'News',
    data(){
        return {
            //  列表数据
            news:[
                {id:1,title:'新闻1'},
                {id:2,title:'新闻2'},
                {id:3,title:'新闻3'}
            ],
            //  透明度
            myOpacity:1,
            //  周期函数容器
            block:undefined
        }
    },
    methods:{
        //  需要传入循环中的对象，用参数接收
        goDetail(obj){
            this.$router.push({
                name:'xiangqing',
                //path:'/about/news/detail',
                query:{
                    id:obj.id,
                    title:obj.title
                }
            })
        },
    },
    beforeDestroy(){
        console.log(`News组件即将被销毁了`)
    },
    activated(){
        console.log(`News组件激活`)
        this.block = setInterval(() => {
            console.log(`@`)
            this.myOpacity = this.myOpacity -0.06
            if(this.myOpacity<=0){
                this.myOpacity = 1
            }
        },27)
    },
    deactivated(){
        console.log(`News组件失活`)
        clearInterval(this.block)
    },
    //  组件内守卫
    beforeRouteEnter(to,from,next){
        console.log(`进入守卫触发了`)
        console.log(to)
        console.log(from)
        console.log(next)
        next()
    },
    beforeRouteLeave(to,from,next){
        console.log(`离开守卫触发了`)
        console.log(to)
        console.log(from)
        console.log(next)
        next()
    }
}
</script>