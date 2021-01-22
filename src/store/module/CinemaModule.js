import http from '@/util/http'
const module = {
  namespaced: true, // 命名空间
  state: {
    cinemaList: []
  },
  mutations: {
    setCinemaList (state, cinemaList) {
      state.cinemaList = cinemaList
    },
    clearCinemaList (state) {
      state.cinemaList = []
    }
  },
  actions: {
    getCinemaList (store, cityId) {
      return http({
        url: `/gateway?cityId=${cityId}&ticketFlag=1&k=5158346`,
        headers: {
          'X-Host': 'mall.film-ticket.cinema.list'
        }
      }).then(res => {
        // console.log(res.data)
        store.commit('setCinemaList', res.data.data.cinemas)
      })
    }
  }
}
export default module
