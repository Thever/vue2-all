//  vuex操作数组
export default {
    //  开启命名空间
    namespaced:true,
    state:{
        list:['数组默认内容']
    },
    actions:{
        addList(context,value){
            context.commit('add',value)
        },
        minList(context,value){
            context.commit('min', value)
        }
    },
    mutations:{
        add(state, value){
            state.list.push(value)
        },
        min(state, value){
            state.list.pop()
        }
    },
    getters:{
        listWord(state){
            let word = ''
            for(let i = 0 ; i < state.list.length; i++){
                word = word + '-' + state['list'][i]
            }
            return word
        }
    }
}