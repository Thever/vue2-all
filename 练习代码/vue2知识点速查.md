# Vue2基础知识点速查

## 01.初始Vue2

	<!-- 
	    初识Vue：
	    1.想让Vue工作，就必须创建一个Vue实例，且要传入一个配置对象；
	    2.root容器里的代码依然符合html规范，只不过混入了一些特殊的Vue语法；
	    3.root容器里的代码被称为【Vue模板】；
	    4.Vue实例和容器是一一对应的；
	    5.真实开发中只有一个Vue实例，并且会配合着组件一起使用；
	    6.{{xxx}}中的xxx要写js表达式，且xxx可以自动读取到data中的所有属性；
	    7.一旦data中的数据发生改变，那么页面中用到该数据的地方也会自动更新；
	
	    注意区分：js表达式 和 js代码(语句)
	    1.表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方：
	    (1). a
	    (2). a+b
	    (3). demo(1)
	    (4). x === y ? 'a' : 'b'
	
	    2.js代码(语句)
	    (1). if(){}
	    (2). for(){}
	-->
	
	<!-- 准备好一个容器 -->
	<div id="demo">
		<h1>Hello，{{name.toUpperCase()}}，{{address}}</h1>
	</div>
	<script type="text/javascript" src="../js/vue.js"></script>
	<script type="text/javascript" >
	Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
	
	//创建Vue实例
	Vue({
	el:'#demo', //el用于指定当前Vue实例为哪个容器服务，值通常为css选择器字符串。
	//	或者这么写,使用原生js来捕获容器对象
	//	el:document.getElementById('root')
	data:{ 
	// data中用于存储数据，数据供el所指定的容器去使用，值我们暂时先写成一个对象。
	// 如果在组件中使用，为了做数据源区别，data会是一个返回数据对象的函数
	name:'dio brando',
	address:'埃及'
	}
	})
	</script>

## 02.模板语法

Vue模板语法有2大类：

​          1.插值语法：

​              功能：用于解析标签体内容。

​              写法：{{xxx}}，xxx是js表达式，且可以直接读取到data中的所有属性。

​          2.指令语法：

​              功能：用于解析标签（包括：标签属性、标签体内容、绑定事件.....）。

​              举例：v-bind:href="xxx" 或  简写为 :href="xxx"，xxx同样要写js表达式，

​                   且可以直接读取到data中的所有属性。

​              备注：Vue中有很多的指令，且形式都是：v-????，此处我们只是拿v-bind举个例子。

	<div id="root">
	    <h1>插值语法</h1>
	    <h3>你好，{{name}}</h3>
	    <hr/>
	    <h1>指令语法</h1>
	    <a v-bind:href="school.url.toUpperCase()" :x="name">点我去{{school.name}} ♂ github</a>
	    <a :href="school.url" x="hello">点我去{{school.name}} ♂ github</a>
	</div>
	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
		new Vue({
			el:'#root',
			data:{
				name:'Thever Wang',
				school:{
					name:'Thever Wang',
					url:'https://github.com/Thever/',
				}
			}
		})
	</script>

## 03.数据绑定

​      Vue中有2种数据绑定的方式：

​          1.单向绑定(v-bind)：数据只能从data流向页面。

​          2.双向绑定(v-model)：数据不仅能从data流向页面，还可以从页面流向data。

​            备注：

​                1.双向绑定一般都应用在表单类元素上（如：input、select等）

​                2.v-model:value 可以简写为 v-model，因为v-model默认收集的就是value值。

	<div id="root">
	    <!-- 普通写法 -->
	    <!-- 单向数据绑定：<input type="text" v-bind:value="name"><br/>
	    双向数据绑定：<input type="text" v-model:value="name"><br/> -->
	
	    <!-- 简写 -->
	    单向数据绑定：<input type="text" :value="name"><br/>
	    双向数据绑定：<input type="text" v-model="name"><br/>
	
	    <!-- 如下代码是错误的，因为v-model只能应用在表单类元素（输入类元素）上 -->
	    <!-- <h2 v-model:x="name">你好啊</h2> -->
	</div>
	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
		new Vue({
			el:'#root',
			data:{
				name:'Thever Wang'
			}
		})
	</script>



## 04.el与data的两钟

​      data与el的2种写法

​          1.el有2种写法

​                  (1).new Vue时候配置el属性。

​                  (2).先创建Vue实例，随后再通过vm.$mount('#root')指定el的值。

​          2.data有2种写法

​                  (1).对象式(vue实例，vue组件)

​                  (2).函数式(vue组件)

​                  如何选择：目前哪种写法都可以，以后学习到组件时，data必须使用函数式，否则会报错。

​          3.一个重要的原则：

​                  由Vue管理的函数，一定不要写箭头函数，一旦写了箭头函数，this就不再是Vue实例了。

	<div id="root">
		<h1>你好，{{name}}</h1>
	</div>
	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
	
		//el的两种写法
		/* const v = new Vue({
			//el:'#root', //第一种写法
			data:{
				name:'Thever Wang'
			}
		})
		console.log(v)
		v.$mount('#root') //第二种写法 */
	
		//data的两种写法
		new Vue({
			el:'#root',
			//data的第一种写法：对象式
			/* data:{
				name:'Thever Wang'
			} */
	
			// data的第二种写法：函数式
			data(){
				console.log('@@@',this) //此处的this是Vue实例对象
				return{
					name:'Thever Wang'
				}
			}
		})
		</script>

## 05.MVVM模型

​           MVVM模型

​            	1. M：模型(Model) ：data中的数据

​            	2. V：视图(View) ：模板代码

​            	3. VM：视图模型(ViewModel)：Vue实例

​      观察发现：

​            	1.data中所有的属性，最后都出现在了vm身上。

​            	2.vm身上所有的属性 及 Vue原型上所有属性，在Vue模板中都可以直接使用。

## 06.数据代理

1.使用Object.defineProperty方法设置 get监控属性读取，设置set方法监控属性设置

	<script type="text/javascript" >
		let number = 18
		let person = {
			name:'张三',
			sex:'男',
		}
	
		Object.defineProperty(person,'age',{
			// value:18,
			// enumerable:true, //控制属性是否可以枚举，默认值是false
			// writable:true, //控制属性是否可以被修改，默认值是false
			// configurable:true //控制属性是否可以被删除，默认值是false
	
			//当有人读取person的age属性时，get函数(getter)就会被调用，且返回值就是age的值
			get(){
				console.log('有人读取age属性了')
				return number
			},
	
			//当有人修改person的age属性时，set函数(setter)就会被调用，且会收到修改的具体值
			set(value){
				console.log('有人修改了age属性，且值是',value)
				number = value
			}
		})
	
		console.log(person)
	</script>

2.数据代理：通过一个对象代理对另一个对象中属性的操作（读/写）


	<script type="text/javascript" >
	    let obj = {x:100}
	    let obj2 = {y:200}
	
	    //	定义 obj2 的 x 属性的 get set 来监控属性读写
	    Object.defineProperty(obj2,'x',{
	        get(){
	        	return obj.x
	        },
	        set(value){
	        	obj.x = value
	        }
	    })
	
	    console.log(obj2)
	</script>
3.vue中的数据代理

​        1.Vue中的数据代理：

​              通过vm对象来代理data对象中属性的操作（读/写）

​        2.Vue中数据代理的好处：

​              更加方便的操作data中的数据

​        3.基本原理：

​              通过Object.defineProperty()把data对象中所有属性添加到vm上。

​              为每一个添加到vm上的属性，都指定一个getter/setter。

​              在getter/setter内部去操作（读/写）data中对应的属性。

​              _data.XXX里面的属性为了监听set，get事件,会做数据劫持，监听内容的变化

​       4.vue 会按照 vm._data.xxx 的属性对应生成 vm.xxx 属性，并且加上数据代理，使得 vm._data.xxx === vm.xxx


    <div id="root">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <!-- 当然直接读取_data中的属性也是可行的，双花括号内可以直接访问Vue实例对象 -->
        <!-- <h2>学校名称：{{_data.name}}</h2>
        <h2>学校地址：{{_data.address}}</h2> -->
    </div>
    <script type="text/javascript">
        Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
        const vm = new Vue({
            el:'#root',
            data:{
            name:'GitHub',
            address:'Thever wang'
            }
        })
    </script>
## 07.事件处理

1.事件的基本使用：

​              1.使用v-on:xxx 或 @xxx 绑定事件，其中xxx是事件名；

​              2.事件的回调需要配置在methods对象中，最终会在vm上；

​              3.methods中配置的函数，不要用箭头函数！否则this就不是vm了；

​              4.methods中配置的函数，都是被Vue所管理的函数，this的指向是vm 或 组件实例对象；

​              5.@click="demo" 和 @click="demo($event)" 效果一致，但后者可以传参；

```kotlin
<div id="root">
    <h2>欢迎来到{{name}}学习</h2>
    <!-- <button v-on:click="showInfo">点我提示信息</button> -->
    <button @click="showInfo1">点我提示信息1（不传参）</button>
    <button @click="showInfo2($event,66)">点我提示信息2（传参）</button>
</div>
<script type="text/javascript">
    Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
    const vm = new Vue({
        el:'#root',
        data:{
            name:'子安武人',
        },
        methods:{
            showInfo1(event){
                // console.log(event.target.innerText)
                // console.log(this) //此处的this是vm
                alert('同学你好！')
            },
            showInfo2(event,number){
                console.log(event,number)
                // console.log(event.target.innerText)
                // console.log(this) //此处的this是vm
                alert('同学你好！！')
            }
        }
    })
</script>
```

2.Vue中的事件修饰符：

​            1.prevent：阻止默认事件（常用）；

​            2.stop：阻止事件冒泡（常用）；

​            3.once：事件只触发一次（常用）；

​            4.capture：使用事件的捕获模式；

​            5.self：只有event.target是当前操作的元素时才触发事件；

​            6.passive：事件的默认行为立即执行，无需等待事件回调执行完毕；


    <div id="root">
        <h2>欢迎来到{{name}}学习</h2>
        <!-- 阻止默认事件（常用） -->
        <a href="http://www.baidu.com" @click.prevent="showInfo">点我提示信息</a>
    
        <!-- 阻止事件冒泡（常用） -->
        <div class="demo1" @click="showInfo">
        <button @click.stop="showInfo">点我提示信息</button>
        <!-- 修饰符可以连续写 -->
        <!-- <a href="http://www.atguigu.com" @click.prevent.stop="showInfo">点我提示信息</a> -->
        </div>
    
        <!-- 事件只触发一次（常用） -->
        <button @click.once="showInfo">点我提示信息</button>
    
        <!-- 使用事件的捕获模式 -->
        <!-- 捕获阶段是从外向触发，事件处理是在冒泡阶段处理，冒泡阶段是从内往外触发 2,1-->
        <!-- 使用捕获模式，就表示在捕获阶段触发事件处理，就是在捕获阶段处理1，然后进入到冒泡处理阶段处理2 -->
        <!-- 同理的，如果有多个捕获模式，那么就按照从外网内的顺序捕获，捕获到的就触发处理函数 -->
        <div class="box1" @click.capture="showMsg(1)">
        	div1
        	<div class="box2" @click="showMsg(2)">
        		div2
        	</div>
        </div>
    
        <!-- 只有event.target是当前操作的元素时才触发事件； -->
        <!-- 注意不阻止冒泡的话，父元素的方法也会被触发，只不过触发对象是子元素 -->
        <div class="demo1" @click.self="showInfo">
        	<button @click="showInfo">点我提示信息</button>
        </div>
    
        <!-- 事件的默认行为立即执行，无需等待事件回调执行完毕； -->
        <!-- scroll是滚动条的滚动，wheel是鼠标滚轮的滚动 -->
        <!-- 默认的处理流程是，事件触发，处理回调函数，处理完成后再进行默认的处理 -->
        <!-- passive可以跳过回调函数处理，直接触发默认的处理方式 -->
        <ul @wheel.passive="demo" class="list">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </div>
    <script type="text/javascript">
        Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
        new Vue({
            el:'#root',
            data:{
                name:'尚硅谷'
            },
            methods:{
                showInfo(e){
                    alert('同学你好！')
                    console.log(e.target)
                },
                showMsg(msg){
                    console.log(msg)
                },
                demo(){
                    for (let i = 0; i < 100000; i++) {
                        console.log('#')
                    }
                    console.log('累坏了')
                }
            }
        })
    </script>
3.键盘事件

​		1.Vue中常用的按键别名：

​              回车 => enter

​              删除 => delete (捕获“删除”和“退格”键)

​              退出 => esc

​              空格 => space

​              换行 => tab (特殊，必须配合keydown去使用)

​              上 => up

​              下 => down

​              左 => left

​              右 => right

​        2.Vue未提供别名的按键，可以使用按键原始的key值去绑定，但注意要转为kebab-case（短横线命名）

​        3.系统修饰键（用法特殊）：ctrl、alt、shift、meta(win键，或者叫windows灰标键位，在mac上是commond键)

​              (1).配合keyup使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发。

​              (2).配合keydown使用：正常触发事件。

​        4.也可以使用keyCode去指定具体的按键（不推荐）

​        5.Vue.config.keyCodes.自定义键名 = 键码，可以去定制按键别

```kotlin
<div id="root">
    <h2>欢迎来到{{name}}学习</h2>
    <!-- 别名指定 -->
    <input type="text" placeholder="按下回车提示输入" @keydown.huiche="showInfo">
    <br />
    <!-- 指定多个拼接输入 -->
    <input type="text" placeholder="按下ctrl+y提示输入" @keydown.ctrl.y="showInfo">
    <!-- 建码指定，但是不推荐，这个特性被移除，原因是某些键位的编码不同,回车键统一的 -->
    <!-- <input type="text" placeholder="按下回车提示输入" @keydown.13="showInfo"> -->
    <br />
    <!-- CapsLock是多个单词的大驼峰形式组成，要把单词拆开小写 -->
    <input type="text" placeholder="按下CapsLock提示输入" @keydown.caps-lock="showInfo">
    <!-- 定义了keyCodes.huiche = 13相当于如下行 -->
    <!-- <input type="text" placeholder="按下回车提示输入" @keydown.enter="showInfo"> -->
</div>
<script type="text/javascript">
    Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
    Vue.config.keyCodes.huiche = 13 //定义了一个别名按键

    new Vue({
        el:'#root',
        data:{
            name:'尚硅谷'
        },
        methods: {
            showInfo(e){
                //	查看名字和编码
                // console.log(e.key,e.keyCode)
                console.log(e.target.value)
            }
        },
    })
</script>
```



## 08.计算属性

1.插值语法实现


    <div id="root">
        全名：<span>{{firstName}}-{{lastName}}</span>
    </div>
    <script type="text/javascript">
        Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
        new Vue({
            el:'#root',
            data:{
                firstName:'张',
                lastName:'三'
            }
        })
    </script>
2.methods实现

```kotlin
<div id="root">
    全名：<span>{{firstName}}-{{lastName}}</span>
</div>
<script type="text/javascript">
    Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
    new Vue({
        el:'#root',
        data:{
            firstName:'张',
            lastName:'三'
        },
        methods: {
            // fullName(){
            // 	console.log('@---fullName')
            // 	return this.firstName + '-' + this.lastName
            // }
            fullName(){
                console.log(`拼接出来的名字为：`)
                return this.firstName+this.lastName
            }
        }
    })
</script>
```

3.计算属性实现

计算属性：

​          1.定义：要用的属性不存在，要通过已有属性计算得来。

​          2.原理：底层借助了Objcet.defineproperty方法提供的getter和setter。

​          3.get函数什么时候执行？

​                (1).初次读取时会执行一次。

​                (2).当依赖的数据发生改变时会被再次调用。

​          4.优势：与methods实现相比，内部有缓存机制（复用），效率更高，调试方便。

​          5.备注：

​              1.计算属性最终会出现在vm上，直接读取使用即可。

​              2.如果计算属性要被修改，那必须写set函数去响应修改，且set中要引起计算时依赖的数据发生改变。

```kotlin
<div id="root">
	姓：<input type="text" v-model="firstName"> <br/><br/>
	名：<input type="text" v-model="lastName"> <br/><br/>
	测试：<input type="text" v-model="x"> <br/><br/>
	全名：<span>{{fullName}}</span> <br/><br/>
	<!-- 全名：<span>{{fullName}}</span> <br/><br/>
	全名：<span>{{fullName}}</span> <br/><br/>
	全名：<span>{{fullName}}</span> -->
</div>
<script type="text/javascript">
	Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
	const vm = new Vue({
		el:'#root',
		data:{
			firstName:'张',
			lastName:'三',
			x:'你好'
		},
		methods: {
			demo(){
				
			}
		},
		computed:{
			fullName:{
				//get有什么作用？当有人读取fullName时，get就会被调用，且返回值就作为fullName的值
				//get什么时候调用？1.初次读取fullName时。2.所依赖的数据发生变化时。
				get(){
					console.log('get被调用了')
					// console.log(this) //此处的this是vm
					return this.firstName + '-' + this.lastName
				},
				//set什么时候调用? 当fullName被修改时。
				set(value){
					console.log('set',value)
					const arr = value.split('-')
					this.firstName = arr[0]
					this.lastName = arr[1]
				}
			}
		}
	})
</script>
```

4.计算属性简写，不需要写get,set，直接返回内容即可

```kotlin
computed:{
	//完整写法
	/* fullName:{
		get(){
			console.log('get被调用了')
			return this.firstName + '-' + this.lastName
		},
		set(value){
			console.log('set',value)
			const arr = value.split('-')
			this.firstName = arr[0]
			this.lastName = arr[1]
		}
	} */
	//简写,但是这样只写了get,没有写setter，用vm.fullName = xxx 去设置时会报错
	fullName(){
		console.log('get被调用了')
		return this.firstName + '-' + this.lastName
	}
}
```

## 09.监视属性

1.监视属性watch：

​          1.当被监视的属性变化时, 回调函数自动调用, 进行相关操作

​          2.监视的属性必须存在，才能进行监视！！

​          3.监视的两种写法：

​              (1).new Vue时传入watch配置

​              (2).通过vm.$watch监视

2.深度监视：

​            (1).Vue中的watch默认不监测对象内部值的改变（一层）。

​            (2).配置deep:true可以监测对象内部值改变（多层）。

​        备注：

​            (1).Vue自身可以监测对象内部值的改变，但Vue提供的watch默认不可以！

​            (2).使用watch时根据数据的具体结构，决定是否采用深度监视。

3.computed和watch之间的区别：

​            1.computed能完成的功能，watch都可以完成。

​            2.watch能完成的功能，computed不一定能完成，例如：watch可以进行异步操作。

```go
<body>
	<!-- 准备好一个容器-->
	<div id="root">
		<h2>今天天气很{{info}}</h2>
		<button @click="changeWeather">切换天气</button>
	</div>
</body>
<script type="text/javascript">
	Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
	const vm = new Vue({
		el:'#root',
		data:{
			isHot:true,
		},
		computed:{
			info(){
				return this.isHot ? '炎热' : '凉爽'
			}
		},
		methods: {
			changeWeather(){
				this.isHot = !this.isHot
			}
		},
		watch:{
			//正常写法
			/* isHot:{
				// immediate:true, //初始化时让handler调用一下
				// deep:true,//深度监视
				handler(newValue,oldValue){
					console.log('isHot被修改了',newValue,oldValue)
				}
			}, */
			//简写
			/* isHot(newValue,oldValue){
				console.log('isHot被修改了',newValue,oldValue,this)
			} */
		}
	})

	//正常写法
	/* vm.$watch('isHot',{
		immediate:true, //初始化时让handler调用一下
		deep:true,//深度监视
		handler(newValue,oldValue){
			console.log('isHot被修改了',newValue,oldValue)
		}
	}) */

	//简写
	/* vm.$watch('isHot',(newValue,oldValue)=>{
		console.log('isHot被修改了',newValue,oldValue,this)
	}) */

</script>
```

4.两个重要的小原则：

​              1.所被Vue管理的函数，最好写成普通函数，这样this的指向才是vm 或 组件实例对象。

​              2.所有不被Vue所管理的函数（定时器的回调函数、ajax的回调函数等、Promise的回调函数），最好写成箭头函数，

​                这样this的指向才是vm 或 组件实例对象。

```go
<div id="root">
	姓：<input type="text" v-model="firstName"> <br/><br/>
	名：<input type="text" v-model="lastName"> <br/><br/>
	全名：<span>{{fullName}}</span> <br/><br/>
	<!-- 封装使用更有效率 -->
	<!-- 全名：<span>{{firstName + '-'+ lastName}}</span> <br/><br/> -->
</div>
<script type="text/javascript">
	Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
	const vm = new Vue({
		el:'#root',
		data:{
			firstName:'张',
			lastName:'三',
			fullName:'张-三'
		},
		watch:{
			firstName(val){
				//	watch中可以加入异步函数
				setTimeout(()=>{
					console.log(this)
					this.fullName = val + '-' + this.lastName
				},1000);
			},
			lastName(val){
				this.fullName = this.firstName + '-' + val
			}
			// watch简写只传入最新的值，handler里面会传入新值和老值
			// 避免混淆，computed 中使用set get方法来监听计算属性 watch中使用handler监听属性
		}
	})
</script>
```

## 10.绑定样式

1. class样式

​                写法:class="xxx" xxx可以是字符串、对象、数组。

​                字符串写法适用于：类名不确定，要动态获取。

​                对象写法适用于：要绑定多个样式，个数不确定，名字也不确定。

​                数组写法适用于：要绑定多个样式，个数确定，名字也确定，但不确定用不用。

2. style样式

​                :style="{fontSize: xxx}"其中xxx是动态值。

​                :style="[a,b]"其中a、b是样式对象。

```go
<div id="root">
	<!-- 绑定class样式--字符串写法，适用于：样式的类名不确定，需要动态指定 -->
	<div class="basic" :class="mood" @click="changeMood">{{name}} 点击切换样式</div> <br/><br/>

	<!-- 绑定class样式--数组写法，适用于：要绑定的样式个数不确定、名字也不确定 -->
	<div class="basic" :class="classArr">{{name}}</div> <br/><br/>

	<!-- 绑定class样式--对象写法，适用于：要绑定的样式个数确定、名字也确定，但要动态决定用不用 -->
	<div class="basic" :class="classObj">{{name}}</div> <br/><br/>

	<!-- 绑定style样式--对象写法 -->
	<div class="basic" :style="styleObj">{{name}}</div> <br/><br/>
	<!-- 绑定style样式--数组写法 -->
	<div class="basic" :style="styleArr">{{name}}</div>

	<!-- <div class="basic" :class="mood"></div>
	<div class="basic" :class="{class1:false,'class2-aaa':false}"></div>
	<div class="basic" :class="['class1','class2']"></div>
	<div class="basic" :style="{'font-size':24px;color:'red'}"></div>
	<div class="basic" :style="[{'font-size':24px},{color:red}]"></div> -->
</div>
<script type="text/javascript">
	Vue.config.productionTip = false
	const vm = new Vue({
		el:'#root',
		data:{
			name:'子安武人',
			mood:'normal',
			classArr:['atguigu1','atguigu2','atguigu3'],
			classObj:{
				atguigu1:false,
				atguigu2:false,
			},
			styleObj:{
				fontSize: '40px',
				color:'red',
			},
			styleObj2:{
				backgroundColor:'orange'
			},
			styleArr:[
				{
					fontSize: '40px',
					color:'blue',
				},
				{
					backgroundColor:'gray'
				}
			]
		},
		methods: {
			changeMood(){
				const arr = ['happy','sad','normal']
				const index = Math.floor(Math.random()*3)
				this.mood = arr[index]
			}
		},
	})
</script>
```

## 11.条件渲染

条件渲染：

​              1.v-if

​                    写法：

​                        (1).v-if="表达式" 

​                        (2).v-else-if="表达式"

​                        (3).v-else="表达式"

​                    适用于：切换频率较低的场景。

​                    特点：不展示的DOM元素直接被移除。

​                    注意：v-if可以和:v-else-if、v-else一起使用，但要求结构不能被“打断”。



​              2.v-show

​                    写法：v-show="表达式"

​                    适用于：切换频率较高的场景。

​                    特点：不展示的DOM元素未被移除，仅仅是使用样式隐藏掉

​                

​              3.备注：使用v-if的时，元素可能无法获取到，而使用v-show一定可以获取到。

```go
<div id="root">
	<h2>当前的n值是:{{n}}</h2>
	<button @click="n++">点我n+1</button>
	<!-- 使用v-show做条件渲染 -->
	<!-- <h2 v-show="false">欢迎来到{{name}}</h2> -->
	<!-- <h2 v-show="1 === 1">欢迎来到{{name}}</h2> -->

	<!-- 使用v-if做条件渲染 -->
	<!-- <h2 v-if="false">欢迎来到{{name}}</h2> -->
	<!-- <h2 v-if="1 === 1">欢迎来到{{name}}</h2> -->

	<!-- v-else和v-else-if -->
	<!-- <div v-if="n === 1">Angular</div>
	<div v-else-if="n === 2">React</div>
	<div v-else-if="n === 3">Vue</div>
	<div v-else>哈哈</div> -->

	<!-- v-if与template的配合使用 -->
	<template v-if="n === 1">
		<h2>你好</h2>
		<h2>子安武人</h2>
		<h2>北京</h2>
	</template>
</div>
<script type="text/javascript">
	Vue.config.productionTip = false
	const vm = new Vue({
		el:'#root',
		data:{
			name:'子安武人',
			n:0
		}
	})
</script>
```

## 12.列表渲染

1.v-for指令:

​            1.用于展示列表数据

​            2.语法：v-for="(item, index) in/of xxx" :key="yyy"

​            3.可遍历：数组、对象、字符串（用的很少）、指定次数（用的很少）

```go
<div id="root">
	<!-- 遍历数组 -->
	<h2>人员列表（遍历数组）</h2>
	<ul>
		<li v-for="(p,index) of persons" :key="index">
			{{p.name}}-{{p.age}}
		</li>
		<hr>
		<!-- index2只是序号的形参，本质上与上面的index一样，用index2+'a'0来做区别标识 -->
		<li v-for="(p2,index2) in persons" :key="index2+'a'">
			{{p2.name}}-{{p2.age}}
		</li>
	</ul>

	<!-- 遍历对象 -->
	<h2>汽车信息（遍历对象）</h2>
	<ul>
		<li v-for="(value,k) of car" :key="k">
			{{k}}-{{value}}
		</li>
		<hr>
		<li v-for="(value2,k2) in car" :key="k2+'a'">
			{{k2}}-{{value2}}
		</li>
	</ul>

	<!-- 遍历字符串 -->
	<h2>测试遍历字符串（用得少）</h2>
	<ul>
		<li v-for="(char,index) of str" :key="index">
			{{char}}-{{index}}
		</li>
		<hr>
		<li v-for="(char2,index2) in str" :key="index2+'a'">
			{{char2}}-{{index2}}
		</li>
	</ul>
			
	<!-- 遍历指定次数 -->
	<h2>测试遍历指定次数（用得少）</h2>
	<ul>
		<li v-for="(number,index) of 5" :key="index">
			{{index}}-{{number}}
		</li>
		<hr>
		<li v-for="(number2,index2) in 5" :key="index2+'a'">
			{{index2}}-{{number2}}
		</li>
	</ul>
</div>
```

2.面试题：react、vue中的key有什么作用？（key的内部原理）

​            1. 虚拟DOM中key的作用：

​                    key是虚拟DOM对象的标识，当数据发生变化时，Vue会根据【新数据】生成【新的虚拟DOM】, 

​                    随后Vue进行【新虚拟DOM】与【旧虚拟DOM】的差异比较，比较规则如下：



​            2.对比规则：

​                  (1).旧虚拟DOM中找到了与新虚拟DOM相同的key：

​                        ①.若虚拟DOM中内容没变, 直接使用之前的真实DOM！

​                        ②.若虚拟DOM中内容变了, 则生成新的真实DOM，随后替换掉页面中之前的真实DOM。

​                  (2).旧虚拟DOM中未找到与新虚拟DOM相同的key

​                        创建新的真实DOM，随后渲染到到页面。

​                        

​            3. 用index作为key可能会引发的问题：

​                      1. 若对数据进行：逆序添加、逆序删除等破坏顺序操作:

​                              会产生没有必要的真实DOM更新 ==> 界面效果没问题, 但效率低。

​                      2. 如果结构中还包含输入类的DOM(input输入框)：

​                              会产生错误DOM更新 ==> 界面有问题。



​            4. 开发中如何选择key?

​                      1.最好使用每条数据的唯一标识作为key, 比如id、手机号、身份证号、学号等唯一值。

​                      2.如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，

​                        使用index作为key是没有问题的。

​            

​            5.如果在v-for便利时没有指定key，vue默认就会把index作为key来使用(自动用索引来作为key)



3.数据过滤 --> 使用Array.fliter方法来过滤结果后返回

```go
//用watch实现
//#region 
new Vue({
    el:'#root',
    data:{
        keyWord:'',
        persons:[
            {id:'001',name:'马冬梅',age:19,sex:'女'},
            {id:'002',name:'周冬雨',age:20,sex:'女'},
            {id:'003',name:'周杰伦',age:21,sex:'男'},
            {id:'004',name:'温兆伦',age:22,sex:'男'}
        ],
        filPerons:[]
    },
    watch:{
        keyWord:{
            immediate:true,
            handler(val){
                //	val是传入的内容
                //	p指代persons过滤循环时每个对象本身
                this.filPerons = this.persons.filter((p)=>{
                    return p.name.indexOf(val) !== -1
                })
            }
        }
    }
}) 
//#endregion

//用computed实现
new Vue({
    el:'#root',
    data:{
        keyWord:'',
        persons:[
            {id:'001',name:'马冬梅',age:19,sex:'女'},
            {id:'002',name:'周冬雨',age:20,sex:'女'},
            {id:'003',name:'周杰伦',age:21,sex:'男'},
            {id:'004',name:'温兆伦',age:22,sex:'男'}
        ]
    },
    computed:{
        filPerons(){
            return this.persons.filter((p)=>{
                console.log(p.name.indexOf(this.keyWord) !== -1)
                return p.name.indexOf(this.keyWord) !== -1
            })
        }
    }
}) 
```

4.列表排序 --> 使用Array.sort方法来排序

```go
new Vue({
    el:'#root',
    data:{
        keyWord:'',
        sortType:0, //0原顺序 1降序 2升序
        persons:[
            {id:'001',name:'马冬梅',age:30,sex:'女'},
            {id:'002',name:'周冬雨',age:31,sex:'女'},
            {id:'003',name:'周杰伦',age:18,sex:'男'},
            {id:'004',name:'温兆伦',age:19,sex:'男'}
        ]
    },
    computed:{
        filPerons(){
            //	过滤内容
            const arr = this.persons.filter((p)=>{
                return p.name.indexOf(this.keyWord) !== -1
            })
            //判断一下是否需要排序
            if(this.sortType){
                arr.sort((p1,p2)=>{
                    // p1前数据项,p2后数据项
                    // 排序需要用来指定确切的判断内容
                    // p1-p2升序
                    // p2-p1降序
                    return this.sortType === 1 ? p2.age-p1.age : p1.age-p2.age
                })
            }
            return arr
        }
    }
})
```

5.数组数据直接更新某一项时无效的问题

```go
<div id="root">
    <h2>人员列表</h2>
    <button @click="updateMei">更新马冬梅的信息</button>
    <ul>
    	<li v-for="(p,index) of persons" :key="p.id">
    		{{p.name}}-{{p.age}}-{{p.sex}}
    	</li>
    </ul>
</div>
<script type="text/javascript">
	Vue.config.productionTip = false
    const vm = new Vue({
        el:'#root',
        data:{
            persons:[
                {id:'001',name:'马冬梅',age:30,sex:'女'},
                {id:'002',name:'周冬雨',age:31,sex:'女'},
                {id:'003',name:'周杰伦',age:18,sex:'男'},
                {id:'004',name:'温兆伦',age:19,sex:'男'}
            ]
        },
        methods: {
            updateMei(){
                // id作为识别key了，修改内容后VM会用diff算法比对，再修改真实DOM
                // this.persons[0].name = '马老师' //奏效
                // this.persons[0].age = 50 //奏效
                // this.persons[0].sex = '男' //奏效
                // this.persons[0] = {id:'001',name:'马老师',age:50,sex:'男'} //不奏效
                this.persons.splice(0,1,{id:'001',name:'马老师',age:50,sex:'男'})	//生效
            }
        }
    }) 
</script>
```

6.模拟数据监测

```go
<script type="text/javascript" >
    //	只做一级对象，没有做多层对象
    let data = {
        name:'TheverWang',
        address:'Github',
    }

    //创建一个监视的实例对象，用于监视data中属性的变化
    const obs = new Observer(data)		
    console.log(obs)	

    //准备一个vm实例对象
    let vm = {}
    vm._data = data = obs

    function Observer(obj){
        //汇总对象中所有的属性形成一个数组
        const keys = Object.keys(obj)
        //遍历
        keys.forEach((k)=>{
            Object.defineProperty(this,k,{
                get(){
                    return obj[k]
                },
                set(val){
                    console.log(`${k}被改了，我要去解析模板，生成虚拟DOM.....我要开始忙了`)
                    obj[k] = val
                }
            })
        })
    }
</script>
```

7.Vue.set 或 vm.$set 设置二级以上响应属性

```go
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h1>学校信息</h1>
			<h2>学校名称：{{school.name}}</h2>
			<h2>学校地址：{{school.address}}</h2>
			<h2>校长是：{{school.leader}}</h2>
			<hr/>
			<h1>学生信息</h1>
			<button @click="addSex">添加一个性别属性，默认值是男</button>
			<h2>姓名：{{student.name}}</h2>
			<h2 v-if="student.sex">性别：{{student.sex}}</h2>
			<h2>年龄：真实{{student.age.rAge}}，对外{{student.age.sAge}}</h2>
			<h2>朋友们</h2>
			<ul>
				<li v-for="(f,index) in student.friends" :key="index">
					{{f.name}}--{{f.age}}
				</li>
			</ul>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		const vm = new Vue({
			el:'#root',
			data:{
				school:{
					name:'TheverWang',
					address:'Github',
				},
				student:{
					name:'tom',
					// sex:'男',
					age:{
						rAge:40,
						sAge:29,
					},
					friends:[
						{name:'jerry',age:35},
						{name:'tony',age:36}
					]
				}
			},
			methods: {
				addSex(){
					console.log(this)
					//set(添加的目标，属性名，属性值)
					// Vue.set(this.student,'sex','男')
					this.$set(this.student,'sex','男')
					//	this.$set(vm._data,'leader','老王')
					//	Vue.set(vm._data,'leader','老王')
					//  Avoid adding reactive properties to a Vue instance or its root $data at runtime
					//	set方法不能用vue的实例对象，或者vue实例的根对象，也就是说set只能修改this.data.xxx以及以下的属性
				}
			}
		})
	</script>
```

8.Vue检测数据的原理

1. vue会监视data中所有层次的数据。

2. 如何监测对象中的数据？

​                通过setter实现监视，且要在new Vue时就传入要监测的数据。

​                  (1).对象中后追加的属性，Vue默认不做响应式处理

​                  (2).如需给后添加的属性做响应式，请使用如下API：

​                          Vue.set(target，propertyName/index，value) 或 

​                          vm.$set(target，propertyName/index，value)



​     3. 如何监测数组中的数据？

​                  通过包裹数组更新元素的方法实现，本质就是做了两件事：

​                    (1).调用原生对应的方法对数组进行更新。

​                    (2).重新解析模板，进而更新页面。



​     4.在Vue修改数组中的某个元素一定要用如下方法：

​              1.使用这些API:push()、pop()、shift()、unshift()、splice()、sort()、reverse()

​                这些方法已经被vue处理过了，与 Array.prototype 原型链上的方法不一样了，是vue添加上去的方法，

​                所以vue可以监听这些方法的调用来处理视图 ==> vue包装数组身上常用方法来实现监听

​              2.Vue.set() 或 vm.$set()

​              3.处理完数据之后直接给数据重新赋值，当然这样没有节点复用，效率低

​        

​       特别注意：Vue.set() 和 vm.$set() 不能给vm 或 vm的根数据对象 添加属性！！！

## 13.收集表单数据

收集表单数据：

​          若：<input type="text"/>，则v-model收集的是value值，用户输入的就是value值。

​          若：<input type="radio"/>，则v-model收集的是value值，且要给标签配置value值。

​          若：<input type="checkbox"/>

​              1.没有配置input的value属性，那么收集的就是checked（勾选 or 未勾选，是布尔值）

​              2.配置input的value属性:

​                  (1)v-model的初始值是非数组，那么收集的就是checked（勾选 or 未勾选，是布尔值）

​                  (2)v-model的初始值是数组，那么收集的的就是value组成的数组

​          备注：v-model的三个修饰符：

​                  lazy：失去焦点再收集数据

​                  number：输入字符串转为有效的数字

​                  trim：输入首尾空格过滤

```go
	<div id="root">
			<form @submit.prevent="demo">
				账号：<input type="text" v-model.trim="userInfo.account"> <br/><br/>
				密码：<input type="password" v-model="userInfo.password"> <br/><br/>
				年龄：<input type="number" v-model.number="userInfo.age"> <br/><br/>
				性别：
				男<input type="radio" name="sex" v-model="userInfo.sex" value="male">
				女<input type="radio" name="sex" v-model="userInfo.sex" value="female"> <br/><br/>
				爱好：
				学习<input type="checkbox" v-model="userInfo.hobby" value="study">
				打游戏<input type="checkbox" v-model="userInfo.hobby" value="game">
				吃饭<input type="checkbox" v-model="userInfo.hobby" value="eat">
				<br/><br/>
				所属校区
				<select v-model="userInfo.city">
					<option value="">请选择校区</option>
					<option value="beijing">北京</option>
					<option value="shanghai">上海</option>
					<option value="shenzhen">深圳</option>
					<option value="wuhan">武汉</option>
				</select>
				<br/><br/>
				其他信息：
				<textarea v-model.lazy="userInfo.other"></textarea> <br/><br/>
				<input type="checkbox" v-model="userInfo.agree">阅读并接受<a href="http://www.atguigu.com">《用户协议》</a>
				<button>提交</button>
			</form>
		</div>

	<script type="text/javascript">
		Vue.config.productionTip = false

		new Vue({
			el:'#root',
			data:{
				userInfo:{
					account:'',
					password:'',
					age:18,
					sex:'female',
					hobby:[],
					city:'beijing',
					other:'',
					agree:''
				}
			},
			methods: {
				demo(){
					console.log(JSON.stringify(this.userInfo))
				}
			}
		})
	</script>
```

## 14.过滤器

过滤器：

​        定义：对要显示的数据进行特定格式化后再显示（适用于一些简单逻辑的处理）。

​        语法：

​            1.注册过滤器：Vue.filter(name,callback) 或 new Vue{filters:{}}

​            2.使用过滤器：{{ xxx | 过滤器名}}  或  v-bind:属性 = "xxx | 过滤器名"

​        备注：

​            1.过滤器也可以接收额外参数、多个过滤器也可以串联

​            2.并没有改变原本的数据, 是产生新的对应的数据

```go
		<div id="root">
			<!-- 过滤器插值语法使用 -->
			<h2>显示格式化后的时间</h2>
			<!-- 计算属性实现 -->
			<h3>计算属性实现 现在是：{{fmtTime}}</h3>
			<!-- methods实现 -->
			<h3>methods实现 现在是：{{getFmtTime()}}</h3>
			<!-- 过滤器实现,过滤器本质就是函数 -->
			<!-- 要过滤的内容 | 过滤器 -->
			<h3> 过滤器实现 现在是：{{time | timeFormater}}</h3>
			<!-- 过滤器实现（传参） -->
			<!-- 要过滤的内容 | 过滤器1(过滤器传入的第二个参数 ==> 第一参数就是默认的内容) | 过滤器2 -->
			<!-- 处理流程： 要过滤的内容经过过滤器1输出结果给过滤器2,然后过滤出结果给过滤器3，然后..到过滤器n,过滤输出结果输出 -->
			<h3>过滤器实现（传参 现在是：{{time | timeFormater('YYYY_MM_DD') | mySlice}}</h3>
			<!-- 过滤器给属性赋值 -->
			<h3 :x="msg | mySlice">子安武人</h3>
		</div>

		<div id="root2">
			<h2>{{msg | mySlice}}</h2>
		</div>

	<script type="text/javascript">
		Vue.config.productionTip = false
		//全局过滤器
		Vue.filter('mySlice',function(value){
			return value.slice(0,4)
		})
		
		new Vue({
			el:'#root',
			data:{
				time:1634195418364, //时间戳
				msg:'jojo,我不做人啦！'
			},
			computed: {
				fmtTime(){
					return dayjs(this.time).format('YYYY年MM月DD日 HH:mm:ss')
				}
			},
			methods: {
				getFmtTime(){
					return dayjs(this.time).format('YYYY年MM月DD日 HH:mm:ss')
				}
			},
			// 局部过滤器
			filters:{
				timeFormater(value,str='YYYY年MM月DD日 HH:mm:ss'){
					// console.log('@',value)
					return dayjs(value).format(str)
				}
			}
		})

		new Vue({
			el:'#root2',
			data:{
				msg:'jojo,ko no dio da!'
			}
		})
	</script>
```

## 15.内置指令

v-text指令：

​            1.作用：向其所在的节点中渲染文本内容。

​            2.与插值语法的区别：v-text会替换掉节点中的内容，{{xx}}则不会。

v-html指令：

​            1.作用：向指定节点中渲染包含html结构的内容。

​            2.与插值语法的区别：

​                  (1).v-html会替换掉节点中所有的内容，{{xx}}则不会。

​                  (2).v-html可以识别html结构。

​            3.严重注意：v-html有安全性问题！！！！

​                  (1).在网站上动态渲染任意HTML是非常危险的，容易导致XSS攻击。

​                  (2).一定要在可信的内容上使用v-html，永不要用在用户提交的内容上！

v-cloak指令（没有值）：

​            1.本质是一个特殊属性，Vue实例创建完毕并接管容器后，会删掉v-cloak属性。

​            2.使用css配合v-cloak可以解决网速慢时页面展示出{{xxx}}的问题。

```go
	<!-- 准备好一个容器-->
		<div id="root">
			<h2 v-cloak>{{name}}</h2>
		</div>
		<!-- 这个资源需要5秒延迟才能加载 -->
		<script type="text/javascript" src="http://localhost:8080/resource/5s/vue.js"></script>

	style>
		/* 带v-cloak的对象会隐藏，vue介入后会删除 c-cloak */
		[v-cloak] {
			display: none;
		}
	</style>
	<script type="text/javascript">
		console.log(1)
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
		
		new Vue({
			el:'#root',
			data:{
				name:'jojo的奇妙冒险'
			}
		})
	</script>
```

v-once指令：

​            1.v-once所在节点在初次动态渲染后，就视为静态内容了。

​            2.以后数据的改变不会引起v-once所在结构的更新，可以用于优化性能。

v-pre指令：

​          1.跳过其所在节点的编译过程。

​          2.可利用它跳过：没有使用指令语法、没有使用插值语法的节点，会加快编译。

## 16.自定义指令

​        自定义指令总结：

​            一、定义语法：

​                  (1).局部指令：

​                        new Vue({                              new Vue({

​                          directives:{指令名:配置对象}  或      directives{指令名:回调函数}

​                        })                                    })

​                  (2).全局指令：

​                          Vue.directive(指令名,配置对象) 或  Vue.directive(指令名,回调函数)



​            二、配置对象中常用的3个回调：

​                  (1).bind：指令与元素成功绑定时调用。

​                  (2).inserted：指令所在元素被插入页面时调用。

​                  (3).update：指令所在模板结构被重新解析时调用。



​            三、备注：

​                  1.指令定义时不加v-，但使用时要加v-；

​                  2.指令名如果是多个单词，要使用kebab-case命名方式，不要用camelCase命名。



```go
		<!-- 准备好一个容器-->
		<div id="root">
			<h2>{{name}}</h2>
			<h2>当前的n值是：<span v-text="n"></span> </h2>
			<!-- <h2>放大10倍后的n值是：<span v-big-number="n"></span> </h2> -->
			<h2>放大10倍后的n值是：<span v-big="n"></span> </h2>
			<button @click="n++">点我n+1</button>
			<hr/>
			<input type="text" v-fbind:value="n">
		</div>
		<script type="text/javascript">
		Vue.config.productionTip = false

		//定义全局指令
		/* Vue.directive('fbind',{
			//指令与元素成功绑定时（一上来）
			bind(element,binding){
				element.value = binding.value
			},
			//指令所在元素被插入页面时
			inserted(element,binding){
				element.focus()
			},
			//指令所在的模板被重新解析时
			update(element,binding){
				element.value = binding.value
			}
		}) */

		new Vue({
			el:'#root',
			data:{
				name:'好天气',
				n:1
			},
			directives:{
				//	directives指令相关的this都是指向window
				//big函数何时会被调用？1.指令与元素成功绑定时（一上来）。2.指令所在的模板被重新解析时。
				/* 
				'big-number'用简写形式来命名解决语义不明，方便使用
				'big-number'(element,binding){
					// console.log('big')
					element.innerText = binding.value * 10
				}, */
				big(element,binding){
					//	element指的是绑到的正式DOM
					// 	binding指的 vue 绑定相关信息
					console.log('big',this) //注意此处的this是window
					// console.log(binding)
					element.innerText = binding.value * 10
				},
				fbind:{
					//指令与元素成功绑定时（一上来）
					bind(element,binding){
						// console.log(`element`)
						// console.log(element)
						// console.log(`binding`)
						// console.log(binding)
						element.value = binding.value
					},
					//指令所在元素被插入页面时
					inserted(element,binding){
						// console.log(`element`)
						// console.log(element)
						// console.log(`binding`)
						// console.log(binding)
						element.focus()
					},
					//指令所在的模板被重新解析时
					update(element,binding){
						// console.log(`element`)
						// console.log(element)
						// console.log(`binding`)
						// console.log(binding)
						element.value = binding.value
					}
				}
			}
		})
```

## 17.生命周期

生命周期：

​            1.又名：生命周期回调函数、生命周期函数、生命周期钩子。

​            2.是什么：Vue在关键时刻帮我们调用的一些特殊名称的函数。

​            3.生命周期函数的名字不可更改，但函数的具体内容是程序员根据需求编写的。

​            4.生命周期函数中的this指向是vm 或 组件实例对象。

常用的生命周期钩子：

​            1.mounted: 发送ajax请求、启动定时器、绑定自定义事件、订阅消息等【初始化操作】。

​            2.beforeDestroy: 清除定时器、解绑自定义事件、取消订阅消息等【收尾工作】。

关于销毁Vue实例

​            1.销毁后借助Vue开发者工具看不到任何信息。

​            2.销毁后自定义事件会失效，但原生DOM事件依然有效。

​            3.一般不会在beforeDestroy操作数据，因为即便操作数据，也不会再触发更新流程了。

## 18.非单文件组件

**Vue中使用组件的三大步骤：**

​          一、定义组件(创建组件)

​          二、注册组件

​          三、使用组件(写组件标签)



​      一、如何定义一个组件？

​            使用Vue.extend(options)创建，其中options和new Vue(options)时传入的那个options几乎一样，但也有点区别；

​            区别如下：

​                1.el不要写，为什么？ ——— 最终所有的组件都要经过一个vm的管理，由vm中的el决定服务哪个容器。

​                2.data必须写成函数，为什么？ ———— 避免组件被复用时，数据存在引用关系,避免同名属性被替换污染。

​            备注：使用template可以配置组件结构。



​      二、如何注册组件？

​              1.局部注册：靠new Vue的时候传入components选项

​              2.全局注册：靠Vue.component('组件名',组件)



​      三、编写组件标签：

​              <school></school>

```go
		<!-- 准备好一个容器-->
		<div id="root">
			<hello></hello>
			<hr>
			<h1>{{msg}}</h1>
			<hr>
			<!-- 第三步：编写组件标签 -->
			<school></school>
			<hr>
			<!-- 第三步：编写组件标签 -->
			<student></student>
		</div>

		<div id="root2">
			<hello></hello>
		</div>
		<script type="text/javascript">
		Vue.config.productionTip = false

		//第一步：创建school组件
		const school = Vue.extend({
			template:`
				<div class="demo">
					<h2>学校名称：{{schoolName}}</h2>
					<h2>学校地址：{{address}}</h2>
					<button @click="showName">点我提示学校名</button>	
				</div>
			`,
			// el:'#root', //组件定义时，一定不要写el配置项，因为最终所有的组件都要被一个vm管理，由vm决定服务于哪个容器。
			data(){
				return {
					schoolName:'子安武人',
					address:'Github'
				}
			},
			methods: {
				showName(){
					alert(this.schoolName)
				}
			},
		})


		//第一步：创建student组件
		const student = Vue.extend({
			template:`
				<div>
					<h2>学生姓名：{{studentName}}</h2>
					<h2>学生年龄：{{age}}</h2>
				</div>
			`,
			data(){
				return {
					studentName:'张三',
					age:18
				}
			}
		})
		
		//第一步：创建hello组件
		const hello = Vue.extend({
			template:`
				<div>	
					<h2>你好啊！{{name}}</h2>
				</div>
			`,
			data(){
				return {
					name:'Tom'
				}
			}
		})
		
		//第二步：全局注册组件
		//全局注册组件可以直接用标签直接调用，不需要在components声明
		//不能简写
		Vue.component('hello',hello)
		// 创建vm
		new Vue({
			el:'#root',
			// data:{
			// 	msg:'你好啊！'
			// },
			//	当然data也可以用函数的返回形式
			data(){
				return {
					msg:'楼吼哇~233333'
				}
			},
			//第二步：注册组件（局部注册），绑定使用名称和声明组件
			components:{
				//	调用标签名:对应的组件
				school:school,
				student:student
			}
			//	简写
			// components:{
			// 	school,
			// 	student
			// }
		})

		new Vue({
			el:'#root2',
		})
	</script>
```

**几个注意点：**

​          1.关于组件名:

​                一个单词组成：

​                      第一种写法(首字母小写)：school

​                      第二种写法(首字母大写)：School(可以呼应vue devtools)

​                多个单词组成：

​                      第一种写法(kebab-case命名)：my-school(连杠分割)

​                      第二种写法(CamelCase命名)：MySchool (需要Vue脚手架支持,大驼峰)

​                备注：

​                    (1).组件名尽可能回避HTML中已有的元素名称，例如：h2、H2都不行。(渲染时会强制小写，渲染出错也不报错)

​                    (2).可以使用name配置项指定组件在开发者工具中呈现的名字。

​          2.关于组件标签:

​                第一种写法：<school></school> 有开始有结束

​                第二种写法：<school/>     自闭和

​                备注：不用使用脚手架时，<school/>会导致后续组件不能渲染。

​          3.一个简写方式：

​                const school = Vue.extend(options) 可简写为：const school = options

```go
		<!-- 准备好一个容器-->
		<div id="root">
			<h1>{{msg}}</h1>
			<!-- 显示三个内容 -->
			<hr>
			<my-school></my-school>
			<my-school></my-school>
			<my-school></my-school>
			<!-- 没有脚手架支持只显示一个 -->
			<hr>
			<my-school/>
			<my-school/>
			<my-school/>
		</div>
		<script type="text/javascript">
		Vue.config.productionTip = false
		
		//定义组件
		// const s = Vue.extend({
		//	指定vue devtool中显示的元素名称
		// 	name:'TheverWang',
		// 	template:`
		// 		<div>
		// 			<h2>学校名称：{{name}}</h2>	
		// 			<h2>学校地址：{{address}}</h2>	
		// 		</div>
		// 	`,
		// 	data(){
		// 		return {
		// 			name:'子安武人',
		// 			address:'Github'
		// 		}
		// 	}
		// })

		//	忽略Vue.extend()
		const s  = {
			name:'TheverWang',
			template:`
				<div>
					<h2>学校名称：{{name}}</h2>	
					<h2>学校地址：{{address}}</h2>	
				</div>
			`,
			data(){
				return {
					name:'子安武人',
					address:'Github'
				}
			}
		}
		new Vue({
			el:'#root',
			data:{
				msg:'欢迎学习Vue!'
			},
			components:{
				'my-school':s
			}
		})
	</script>

```

**组件的嵌套使用：**

```go
	<body>
		<!-- 准备好一个容器-->
		<div id="root"></div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		//定义student组件
		const student = Vue.extend({
			name:'student',
			template:`
				<div>
					<h2>学生姓名：{{name}}</h2>	
					<h2>学生年龄：{{age}}</h2>	
				</div>
			`,
			data(){
				return {
					name:'尚硅谷',
					age:18
				}
			}
		})
		
		//定义school组件
		const school = Vue.extend({
			name:'school',
			//	组件中注册其他组件就可以在template使用其内容
			template:`
				<div>
					<h2>学校名称：{{name}}</h2>	
					<h2>学校地址：{{address}}</h2>	
					<student></student>
				</div>
			`,
			data(){
				return {
					name:'子安武人',
					address:'Github'
				}
			},
			//注册组件（局部）
			//使用student组件作为子组件
			components:{
				student
			}
		})

		//定义hello组件
		const hello = Vue.extend({
			template:`<h1>{{msg}}</h1>`,
			data(){
				return {
					msg:'欢迎进行Vue学习！'
				}
			}
		})
		
		//定义app组件
		const app = Vue.extend({
			//	使用注册的组件内容
			template:`
				<div>	
					<hello></hello>
					<school></school>
				</div>
			`,
			//	局部注册内容
			components:{
				school,
				hello
			}
		})

		//创建vm,实例化vue
		const vm = new Vue({
			//	内容使用组件
			template:'<app></app>',
			el:'#root',
			//注册组件（局部）
			components:{app}
		})
	</script>
```

​      **关于VueComponent：**

​            1.school组件本质是一个名为VueComponent的构造函数，且不是程序员定义的，是Vue.extend生成的。

​            2.我们只需要写<school/>或<school></school>，Vue解析时会帮我们创建school组件的实例对象，

​              即Vue帮我们执行的：new VueComponent(options)。

​            3.特别注意：每次调用Vue.extend，返回的都是一个全新的VueComponent！！！！

​            4.关于this指向：

​                (1).组件配置中：

​                      data函数、methods中的函数、watch中的函数、computed中的函数 它们的this均是【VueComponent实例对象】。

​                (2).new Vue(options)配置中：

​                      data函数、methods中的函数、watch中的函数、computed中的函数 它们的this均是【Vue实例对象】。

​            5.VueComponent的实例对象，以后简称vc（也可称之为：组件实例对象,不能用el指定绑定容器，data必须用函数形式）。

​             Vue的实例对象，以后简称vm。(可以用el指定绑定容器，data可以使用函数形式或对象形式)

```go
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		//定义student组件
		const student = Vue.extend({
			name:'student',
			template:`
				<div>
					<h2>学生姓名：{{name}}</h2>	
					<h2>学生年龄：{{age}}</h2>	
				</div>
			`,
			data(){
				return {
					name:'尚硅谷',
					age:18
				}
			}
		})
		
		//定义school组件
		const school = Vue.extend({
			name:'school',
			//	组件中注册其他组件就可以在template使用其内容
			template:`
				<div>
					<h2>学校名称：{{name}}</h2>	
					<h2>学校地址：{{address}}</h2>	
					<student></student>
				</div>
			`,
			data(){
				return {
					name:'子安武人',
					address:'Github'
				}
			},
			//注册组件（局部）
			//使用student组件作为子组件
			components:{
				student
			}
		})

		//定义hello组件
		const hello = Vue.extend({
			template:`<h1>{{msg}}</h1>`,
			data(){
				return {
					msg:'欢迎进行Vue学习！'
				}
			}
		})
		
		//定义app组件
		const app = Vue.extend({
			//	使用注册的组件内容
			template:`
				<div>	
					<hello></hello>
					<school></school>
				</div>
			`,
			//	局部注册内容
			components:{
				school,
				hello
			}
		})

		//创建vm,实例化vue
		const vm = new Vue({
			//	内容使用组件
			template:'<app></app>',
			el:'#root',
			//注册组件（局部）
			components:{app}
		})
	</script>
```

**.一个重要的内置关系：**

​		VueComponent.prototype.__proto__ === Vue.prototype

​        vue组件的隐式原型属性 === vue实例化的显示原型属性

​        为什么要有这个关系：让组件实例对象（vc）可以访问到 Vue原型上的属性、方法。

```go
	<!-- 准备好一个容器-->
	<div id="root">
		<school></school>
	</div>
	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
		//	定义vue的显示原型属性x
		Vue.prototype.x = 99

		//定义school组件
		const school = Vue.extend({
			name:'school',
			template:`
				<div>
					<h2>学校名称：{{name}}</h2>	
					<h2>学校地址：{{address}}</h2>	
					<button @click="showX">点我输出x</button>
				</div>
			`,
			data(){
				return {
					name:'TheverWang',
					address:'Github'
				}
			},
			methods: {
				showX(){
					//	根据js原型链的原理，不存在x属性时，会在其隐藏原型属性上寻找(VueComponent.prototype._proto_.x)
					//	VueComponent原型对象的原型对象(原型链的上一层指向)，是Vue的原型对象
					//	实例的隐式原型属性 == 其构造函数的显示原型属性, 也就是使用Vue.prototype.x (也就是 VueComponent.prototype._proto_.x === Vue.prototype.x)
					console.log(this.x)
				}
			},
		})

		//创建一个vm
		const vm = new Vue({
			el:'#root',
			data:{
				msg:'你好'
			},
			components:{school}
		})

		
		//定义一个构造函数
		/*
		function Demo(){
			this.a = 1
			this.b = 2
		}
		//创建一个Demo的实例对象
		const d = new Demo()

		console.log(Demo.prototype) //显示原型属性

		console.log(d.__proto__) //隐式原型属性

		console.log(Demo.prototype === d.__proto__)

		//程序员通过显示原型属性操作原型对象，追加一个x属性，值为99
		Demo.prototype.x = 99

		console.log('@',d) 
		// 对象在寻找某个属性找不到时会从其隐式原型属性上找，如果找到了就回使用该属性
		console.log('@',d.x) 

		// 实例的隐式原型属性等于其原型链上的构造函数的显示原型属性,如果构造函数显示原型属性没找到，则会再次其隐式原型链上寻找，
		// 逐步网上，直接找到返回或者没找到返回undefined
		console.log(Demo.prototype === d.__proto__)
		*/
	</script>
```

## 19.单文件组件

使用单文件组件(.vue),需要脚手架的支持，默认需要vue-cli构建工具，可以使用ES6 import方法导入资源使用，一般需要一个html文件作为渲染容器，一个VM实例化对象中使用多个组件嵌套组成页面样式，实现功能。

index.html(显示的容器) --> app.vue(实例化vue对象，引入多个.vue组件） --> 一层组件.vue --> 二层组件.vue ....