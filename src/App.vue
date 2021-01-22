<template>
  <div>
    <tabbar v-show="isTabbarShow"></tabbar>
    <!-- 路由容器 -->
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import tabbar from './components/Tabbar'
import { mapState } from 'vuex' // export {mapState}

// import axios from 'axios'
// ES6 模块导出
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapState('TabbarModule', ['isTabbarShow'])
  },
  mounted () {
    // console.log(mapState('TabbarModule', ['isTabbarShow']))
  },
  components: {
    tabbar
  }
  // mounted () {
  // 1-后端配置好 cors
  // axios.get("http://localhost:51846/api/values/getString").then(res=>
  // {
  //   console.log(res.data)
  // })

  // 2-猫眼
  // axios.get('/ajax/movieOnInfoList?token=&optimus_uuid=9024ECB04FC611EBA1935D93D0295C6C88FAEC3614F74ED1B1C52E355E222F76&optimus_risk_level=71&optimus_code=10').then(res => {
  //   console.log(res.data)
  // })

  // 3-卖座
  // axios({
  //   url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6950839',
  //   headers: {
  //     'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1610629126874755989176321","bc":"110100"}',
  //     'X-Host': 'mall.film-ticket.film.list'
  //   }
  //   // method:"get"
  // }).then(res => {
  //   console.log(res.data)
  // })
  // }
}
</script>
<style>
li{
  list-style: none;
}
*{
  margin: 0;
  padding: 0;
}
html,body{
  height: 100%;
}
section{
  margin-bottom: 50px;
}
*{
  touch-action: manipulation;
}
</style>>
