import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'


Vue.use(Vuex);

export default  new Vuex.Store({
    state:{
        list:[]
    },
    mutations:{
        listMutations(state,list){
            state.list = list.splice(0,6)
            console.log(list)
            console.log(list[0].title)
        }
    },
    actions:{
        // 获取电影搜素结果
       getList({commit}){
        axios.get("https://www.easy-mock.com/mock/5b77e8fa4687344a8af21a54/first/search").then(function(data){
            console.log(data)
            commit('listMutations',data.data)
        },function(err){
            console.log(err)
        })
       } ,

    }
})