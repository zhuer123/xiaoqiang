<template>
    <div>
        <van-index-bar :index-list="ComputedCityList" @select="handleSelect">
            <div v-for="data in cityList" :key="data.type">
                <van-index-anchor :index="data.type" />
                <van-cell :title="item.name" v-for="(item,index) in data.list" :key="index" @click="handleChangePage(item.name,item.cityId)" />
            </div>
        </van-index-bar>
    </div>
</template>

<script>
import Vue from 'vue'
import { IndexBar, IndexAnchor, Cell, Toast } from 'vant'
import http from '@/util/http'
import { mapMutations } from 'vuex'

Vue.use(IndexBar).use(IndexAnchor).use(Cell)

export default {
  data () {
    return {
      cityList: []
    }
  },
  computed: {
    ComputedCityList () {
      return this.cityList.map(item => item.type)
    }
  },
  mounted () {
    http({
      url: '/gateway?k=1010847',
      headers: {
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then(res => {
    //   console.log(res.data.data.cities)

      this.cityList = this.handleCityData(res.data.data.cities)
    })
  },
  methods: {
    ...mapMutations('CityModule', ['changeCityName', 'changeCityId']),
    handleCityData (cities) {
      // 输入原始数据，输出的是目标数据
    //   console.log(cities)

      const letterArr = []
      const newCities = []
      for (let code = 65; code < 91; code++) {
        // console.log(String.fromCharCode(code))
        letterArr.push(String.fromCharCode(code))
      }
      letterArr.forEach((letter) => {
        const list = cities.filter(item => item.pinyin.substring(0, 1).toUpperCase() === letter)

        if (list.length > 0) {
          newCities.push({
            type: letter,
            list: list
          })
        }
      })
      //   console.log(newCities)
      return newCities
    },
    handleSelect (index) {
      console.log(index)
      Toast(index)
    },
    handleChangePage (name, cityId) {
      // cityId,cityName记录下来
    //   this.$store.state.cityName = name
      // this.$store.commit('changeCityName', name)
      // this.$store.commit('changeCityId', cityId)
      this.changeCityName(name)
      this.changeCityId(cityId)

      this.$router.back()
    }
  }
}
</script>
