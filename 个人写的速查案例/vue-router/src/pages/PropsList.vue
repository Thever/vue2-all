<template>
    <div>
        <!-- 导航区 -->
        <ul>
            <li>
                <router-link active-class="active"
                    to="/propslist/propsA"
                >PropsA</router-link>
            </li>
            <li>
                <!-- <router-link active-class="active"
                    to="/propslist/propsB/2/PropsB的静态内容"
                >PropsB</router-link> -->
                <!-- params用对象写法不能用path,只能用name指定(具名路由) -->
                <router-link active-class="active"
                    :to="{
                        name:'PropsB',
                        params:{
                            id:2,
                            title:'PropsB的静态内容'
                        }
                    }"
                >PropsB</router-link>
            </li>
            <li>
                <router-link active-class="active"
                    :to="{
                        // params存在不能使用path
                        // path:'/propslist/propsC',
                        path:'/propslist/propsC',
                        query:{
                            id:3,
                            title:'PropsC的静态内容'
                        },
                    }"
                >PropsC</router-link>
            </li>
        </ul>
        <!-- 内容区 -->
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:'Propslist',
    data(){
        return{}
    }
}
</script>