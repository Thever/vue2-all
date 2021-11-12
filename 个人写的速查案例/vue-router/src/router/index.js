//  用来配置vue路由文件

//  引入vue-router
import VueRouter from 'vue-router'

//  引入内容组件
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import NewsDetail from '../pages/NewsDetail.vue'
import MessageDetail from '../pages/MessageDetail.vue'
import PropsList from '../pages/PropsList.vue'
import PropsA from '../pages/PropsA.vue'
import PropsB from '../pages/PropsB.vue'
import PropsC from '../pages/PropsC.vue'

//  匹配路径和组件关系
const routes = [
    //  一般匹配
    { 
        //  命名路由，方便指定组件使用
        name:'shouye',
        path: '/home', 
        component: Home,
        //  meta内设置自定义属性判断
        meta:{isAuth:true},
    },
    //  多级路由
    { 
        path: '/about',
        component: About,
        //  meta内设置自定义属性判断
        meta:{isAuth:true},
        children:[
            {
                path:'news',
                component:News,
                children:[
                    {
                        //  命名路由，方便指定组件使用
                        name:'xiangqing',
                        path:'detail',
                        component:NewsDetail
                    }
                ]
            },
            {
                path:'message',
                component:Message,
                children:[
                    {
                        path:'msdetail/:id/:title',
                        //  params使用对象写法不能用path,只能用name指定
                        name:'xinxi',
                        component:MessageDetail
                    }
                ]
            }
        ]
    },
    //  props传值的三种形式
    {
        path:'/propslist',
        component:PropsList,
        //  配置独享守卫
        beforeEnter(to,from,next){
            console.log(`/propslist 配置的独享守卫，监听页面进入`)
            console.log(to)
            console.log(from)
            console.log(next)
            //  如果localstorage.name 为 jojo,就允许进入
            if(localStorage.name === 'jojo'){
                next()
            }else{
                alert(`localstorage.name 为 jojo 才能进入`)
            }
        },
        children:[
            {
                path:'propsA',
                component:PropsA,
                //  props传值方式一：直接传入静态内容，组件内用props接受即可
                props:{id:1,title:'PropA传入静态内容'}
            },
            {
                path:'propsB/:id/:title',
                component:PropsB,
                name:'PropsB',
                //  props传值方式二：props:true,将param中的内容通过props直接传给组件
                props:true
            },
            {
                path:'propsC/',
                component:PropsC,
                name:'PropsC',
                //  props传值方式三：通过给props指定返回函数，将返回内容通过props传给组件
                //  query传参与params传参不能一起使用
                props($route){
                    return {
                        id:$route.query.id,
                        title:$route.query.title,
                        test1:'test1',
                        test2:'test2'
                    }
                }
            }
        ]
    }
]

//  创建路由实例
const router = new VueRouter({
    // 默认使用hash模式
    // 开始history模式
    // mode:'history',
    // routes: routes
    routes
})

//  全局前置守卫：页面初始化，路由切换前调用
//  全局前置守卫用来处理页面访问
router.beforeEach((to, from, next) => {
    console.log(`全局前置守卫被调用了`)
    console.log(to)
    console.log(from)
    console.log(next)
    // //  这里可以做逻辑判断来决定是否放行
    // if(true){
    //     next()
    // }
    //  对于需要授权的页面进行判断，否则直接渲染
    if(to.meta.isAuth){
        if(localStorage.getItem('name')==='jojo'){
            next()
        }else{
            alert('localStorage.name 不为 jojo 的不能访问')
        }
    }else{
        next()
    }
})

//  全局后置守卫：页面初始化，路由切换后调用,切换完之后已经完成了，没有next了
//  全局后置守卫，用来处理进入页面后的通用处理
router.afterEach((to, from) => {
    console.log(`全局后置守卫被调用了`)
    console.log(to)
    console.log(from)
    //  进入页面后将页面的title设置为path
    document.title = to.path
})
//  暴露路由实例
export default router