import Vue from 'vue'
import Vuex from 'vuex'
import CityModule from './module/CityModule'
import CinemaModule from './module/CinemaModule'
import TabbarModule from './module/TabbarModule'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

// store "全局"的对象
export default new Vuex.Store({
  plugins: [createPersistedState()],

  // 公共状态
  state: {
  },
  // 集中式修改状态  被监控了？？？
  mutations: {
  },
  // 异步
  actions: {
  },
  // 各个模块-火车组装
  modules: {
    CityModule,
    CinemaModule,
    TabbarModule
  }
})

// store 只是存在内存中的

// store配置持久化
