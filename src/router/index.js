import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from '../views/Film.vue'
import Cinema from '../views/Cinema.vue'
import Search from '../views/Search.vue'
import Detail from '../views/Detail.vue'
import City from '../views/City.vue'

import Nowplaying from '../views/film/Nowplaying.vue'
import Comingsoon from '../views/film/Comingsoon.vue'

Vue.use(VueRouter) // 注册模块，已经注册了全局组件 router-view

const routes = [
  {
    path: '/film',
    component: Film,
    // 嵌套路由
    children: [
      {
        path: 'nowplaying', // 简写
        component: Nowplaying
      },
      {
        path: 'comingsoon',
        component: Comingsoon
      },
      {
        path: '',
        redirect: '/film/nowplaying'
      }
    ]
  },
  {
    path: '/cinema',
    component: Cinema
  },
  {
    path: '/cinema/search',
    component: Search
  },
  {
    path: '/city',
    component: City
  },
  {
    path: '/center',
    component: () => import(/* webpackChunkName: "kerwingroup" */ '../views/Center.vue')
  },
  // {
  //   path:'/detail/:myid',//动态路由
  //   component:Detail,
  //   name:'kerwinDetail'
  // },
  {
    path: '/detail',
    component: Detail
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "kerwingroup" */ '../views/Login.vue')
  },
  {
    path: '*', // 通配符
    redirect: '/film'
  }
]

const router = new VueRouter({
  mode: 'history', // hash,history
  routes
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
  // ...
  const auth = ['/center', '/order', '/money', '/card']
  if (auth.includes(to.fullPath)) {
    if (!localStorage.getItem('token')) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
