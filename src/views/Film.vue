<template>
    <div>
        <film-swiper>
            <div class="swiper-slide" v-for="(data,index) in imgList" :key="index">
                <div :style="{backgroundImage:'url('+data+')'}" style="height:200px;background-size:cover;"></div>
            </div>
        </film-swiper>
        <!-- 只有在vue中，组件上写的class，style会自动传到组件的根节点上 -->
        <film-header style="position:sticky;top:0px;background:white;z-index:100;"></film-header>

        <router-view></router-view>

        <!-- kerwin负责开发 -->
    </div>
</template>

<script>
import filmHeader from './film/FilmHeader'
import filmSwiper from './film/FilmSwiper'
export default {
  data () {
    return {
      imgList: ['https://static.maizuo.com/pc/v5/usr/movie/c3a32bd973128a58d969836ea8e0120e.jpg?x-oss-process=image/quality,Q_70', 'https://static.maizuo.com/pc/v5/usr/movie/e91c49fcf37ea913d47a4f8321e6d6f0.jpg?x-oss-process=image/quality,Q_70', 'https://static.maizuo.com/pc/v5/usr/movie/2b2c8beb2909aa0d37379b2edf61a4d6.jpg?x-oss-process=image/quality,Q_70']
    }
  },
  components: {
    filmHeader,
    filmSwiper
  }
}
</script>
