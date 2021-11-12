<template>
    <div>
        <p>Message消息页内容</p>
        <ul>
            <li v-for="item in list" :key="item.id">
                <!-- 跳转路由并携带query参数，to的字符串写法 -->
                <!-- <router-link active-class="active" :to="`/about/message/msdetail/${item.id}/${item.title}`">{{item.id}}{{item.title}}</router-link> -->
                <!-- 跳转路由并携带query参数，to的对象写法 -->
                <!-- params对象写法只能用name指定路由组件，不能用path指定 -->
                <router-link active-class="active" :to="{
                    name:'xinxi',
                    params:{
                        title:item.title,
                        id:item.id
                    }
                }">{{item.id}}{{item.title}}</router-link>
                <input></input>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:'Message',
    data(){
        return{
            list:[
                {id:1,title:'消息1'},
                {id:2,title:'消息2'},
                {id:3,title:'消息3'}
            ]
        }
    }
}
</script>