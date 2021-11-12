<template>
  <div id="app">
    <h1>开始使用组件并进行交互</h1>
    <!-- Props传入方法调用，子组件调用父组件方法 -->
    <Props :word="name" :propsMethod="fatherOne"/>
    <!-- 自定义事件调用，子组件调用父组件方法 -->
    <!-- <SonBack @wzw="fatherTwo" /> -->
    <SonBack ref="showTwo" @click.native="showInfo"/>
    <!-- 事件总线调用，子组件间相互调用方法 -->
    <Boy />
    <Girl />
    <!-- 使用三方库pubsub-js来实现消息的发布和订阅 -->
    <User />
    <PostOffice />
    <hr>
    <!-- this.$nextTick指定DOM更新后出回调 -->
    <p ref="message">查看message的值：{{message}}</p>
    <button @click="changeMessage">点我修改message</button>
    <hr>
    <!-- keep-alive组件调用 -->
    <keep-alive>
      <component :is="keepaliveShow"></component>
    </keep-alive>
    <button @click="change">点我切换keep-alive使用的组件</button>
    <hr>
    <!-- ref调用组件的方法 -->
    <ForUse ref="forUse"></ForUse>
    <button @click="useRef">点我通过 ref 来调用子组件的方法</button>
    <hr>
    <!-- 插槽用法 -->
    <MySlot>
      <template>
        <p style="color:red">我使用的是默认插槽</p>
      </template>
    </MySlot>
    <MySlot>
      <p style="color:red">使用默认插槽可以不用template标签包裹内容</p>
    </MySlot>
    <MyNameSlot>
      <template slot="header">
        <p style="color:blue">我使用的是具名插槽header</p>
      </template>
      <template v-slot:footer>
        <p style="color:blue">我使用的是具名插槽footer</p>
      </template>
    </MyNameSlot>
    <MyScopeSlot>
      <!-- 由于要使用组件内插槽的内容，需要用template来包裹 -->
      <!-- scope用来指定插槽 -->
      <template scope="useSlot">
        <ul>
          <li v-for="(item, index) in useSlot.game" :key="index">{{item}}</li>
        </ul>
      </template>
    </MyScopeSlot>
    <MyScopeSlot>
      <!-- 使用新api slot-scope 来替代原本的 scope -->
      <template slot-scope="useSlot">
        <ol>
          <li v-for="(item, index) in useSlot.game" :key="index">{{item}}</li>
        </ol>
      </template>
    </MyScopeSlot>
    <MyScopeSlot>
      <!-- 使用新api slot-scope 来替代原本的 scope -->
      <template slot-scope="{game, msg}">
        <p>也能通过解构赋值来获取slot插槽上传递的信息</p>
        <p style="color:pink">{{msg}}</p>
        <ol>
          <li v-for="(item, index) in game" :key="index">{{item}}</li>
        </ol>
      </template>
    </MyScopeSlot>
  </div>
</template>

<script>
import Props from './components/props.vue'
import SonBack from './components/SonBack.vue'
import Boy from './components/boy.vue'
import Girl from './components/girl.vue'
import User from './components/user.vue'
import PostOffice from './components/postOffice.vue'
import InputA from './components/InputA.vue'
import InputB from './components/InputB.vue'
import ForUse from './components/ForUse.vue'
import MySlot from './components/MySlot.vue'
import MyNameSlot from './components/MyNameSlot.vue'
import MyScopeSlot from './components/MyScopeSlot.vue'
export default {
  name: 'App',
  data(){
    return {
      name:'props来传入内容和方法',
      message:'默认值',
      keepaliveShow:'InputA'
    }
  },
  methods:{
    fatherOne(...params){
      console.log('APP获取到通过给子组件Props 用 props 传入回调方法的参数了')
      console.log(params)
    },
    fatherTwo(...params){
      console.log('APP获取通过自定义事件，子组件向父组件传值了')
      console.log(params)
    },
    showInfo(){
      alert('触发了组件绑定的原生事件')
    },
    showWord(){
      console.log(this.$refs.message.innerText)
    },
    changeMessage(){
      //  修改了message,但是DOM还没渲染更新
      this.message = '修改后的值'
      //  DOM没更新，DOM里面的文字还是原本的默认值
      console.log(this.$refs.message.innerText)
      //  this.$nextTick 指定下次DOM更新后再调用回调函数
      //  this.$nextTick(function(){
      //   //  获取DOM修改了之后的内容
      //   console.log(this.$refs.message.innerText)
      // })
      //  把方法写到methods中
      this.$nextTick(this.showWord)
      //  到点定时器要放入队列处理，也能解决,不过推荐使用官方的nextTick
      // setTimeout(() => {
      //   console.log(this.$refs.message.innerText)
      // })
    },
    change(){
      console.log(`change`)
      this.keepaliveShow = this.keepaliveShow === 'InputA'?'InputB':'InputA'
      console.log(`this.keepaliveShow`,this.keepaliveShow)
    },
    useRef(){
      console.log('准备调用组件的方法')
      this.$refs.forUse.useWay('传入参数')
    }
  },
  components: {
    Props,
    SonBack,
    Boy,
    Girl,
    User,
    PostOffice,
    InputA,
    InputB,
    ForUse,
    MySlot,
    MyNameSlot,
    MyScopeSlot
  },
  mounted(){
    //  使用ref来挂载自定义事件
    this.$refs.showTwo.$on('wzw', this.fatherTwo)
  }
}
</script>

<style>

</style>
