<template>
    <div>
        <p>About页内容</p>
        <!-- 点击切换的二级路由 -->
        <ul>
            <li>
                <router-link active-class="active" to="/about/news">news</router-link>
            </li>
            <li>
                <router-link active-class="active" to="/about/message">message</router-link>
            </li>
        </ul>
        <!-- 嵌套路由展示内容需要容器 -->
        <!-- <router-view></router-view> -->
        <!-- 使用keep-alive来缓存组件 -->
        <!-- include="组件名1,组件名2",逗号后面不要加空格，组件名为组件的注册名，不是路由配置的name -->
        <keep-alive include="News,Message">
            <router-view></router-view>
        </keep-alive>
    </div>
</template>
<script>
export default {
    name:'About',
}
</script>