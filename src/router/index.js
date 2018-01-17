import Vue from 'vue'
import Router from 'vue-router'
 

import Index from '@/index'
import Login from '@/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
        path: '/login',
       	name: 'login',
        component: Login
    }
  ]
})
