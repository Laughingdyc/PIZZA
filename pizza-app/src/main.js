import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'
import { routes } from "./router";
import axios from "axios";

import { store } from './store/store.js'

Vue.use(VueRouter)

axios.defaults.baseURL = 'https://order-app-1-9ab3f.firebaseio.com/'

// 配置Vue原型(不用引入  可以直接在任何组件使用)
Vue.prototype.http = axios;

const router = new VueRouter({
  routes,
  mode:'history',
  scrollBehavior(to, from, savedPosition){
    // return{
    //   x: 0,
    //   y: 100
    // }

    // return{
    //   selector: '.btn'
    // }

    if(savedPosition){
      return savedPosition;
    }else{
      return {
        x: 0,
        y: 0
      }
    }
  }
})

// 全局守卫
router.beforeEach((to, form, next) => {
  if(to.path == '/login' || to.path == '/register'){
    next()
  }else{
    if(store.getters.isLogin === true){
      next()
    }else{
      alert("请先登录")
      next('/login')
    }
  }
})


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
