<template>
    <div>
        <van-search
            v-model="value"
            show-action
            placeholder="请输入搜索关键词"
            @cancel="handleCancel()"
        />
        <van-list>
            <van-cell v-for="data in computedCinemaList" :key="data.cinemaId">
                <div>{{data.name}}</div>
                <div class="address">{{data.address}}</div>
            </van-cell>
        </van-list>
    </div>
</template>

<script>
import Vue from 'vue'
import { Search, List, Cell } from 'vant'
import { mapActions, mapState } from 'vuex'

Vue.use(Search).use(List).use(Cell)

export default {
  data () {
    return {
      value: ''// 为true，会执行computed里面的方法
    }
  },
  computed: {
    ...mapState('CinemaModule', ['cinemaList']),
    ...mapState('CityModule', ['cityId']),
    computedCinemaList () {
      if (this.value === '') return []
      return this.cinemaList.filter(item => item.name.toUpperCase().includes(this.value.toUpperCase()) || item.address.toUpperCase().includes(this.value.toUpperCase()))
    }
  },
  mounted () {
    // console.log(this.$store.state.cinemaList)
    if (this.cinemaList.length === 0) {
      // vuex异步流程
      this.getCinemaList(this.cityId)
    } else {
      console.log('缓存')
    }
  },
  methods: {
    ...mapActions('CinemaModule', ['getCinemaList']),
    handleCancel () {
      // push,back,replace
      this.$router.replace('/cinema')
    }
  }
}
</script>

<style lang="scss" scoped>
li{
    padding: 5px;
    .address{
        font-size: 12px;
        color: gray;
    }
}
</style>
