//  vuex操作数字
export default {
    //  开启命名空间
    namespaced:true,
    state:{
        // 公用数字
        num:1
    },
    actions:{
        numAdd(context, value){
            // 调用mutation方法操作值
            context.commit('add',value)
        },
        numMin(context, value){
            //  调用mutation方法操作值
            context.commit('min',value)
        }
    },
    mutations:{
        add(state,value){
            state.num += value
        },
        min(state,value){
            state.num -= value
        }
    },
    getters:{
        numBig(state){
            return state.num*10
        }
    }
}