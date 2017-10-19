import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let store = new Vuex.Store({
    state:{
        num:100
    },
    mutations:{
        // 里面可以定义多个函数，当触发这个函数就会改变state的状态
        addIncrement(state,param){  // 传多个参数时
            // console.log(count);
            // 接收一个state作为参数,相当于上面的state
            state.num += param.n;
            // setTimeout(()=>{
            //     state.num += param.n;
            // },1000); //数据不同步
        },
        jianIncrement(state){
            // 接收一个state作为参数,相当于上面的state
            state.num -= 5;
        }
    },
    actions:{
        addAction(context){
            // context是一个对象
            setTimeout(()=>{
                context.commit('addIncrement',{n:5});
            },1000);
        }
    }
});


export default store