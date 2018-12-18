<template>
     <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="list in lists" :key="list.id">
              <a class="js-no-follow" :href="list.clickUrl">
                <img class="goods-main-photo fadeIn" :src="list.img">
              </a>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>  
</template>
<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
export default {
  props:  {
    lists: {
      type: Array,
      required: true
    },
    name: {}
  },
  created(){
    //console.log('created: ',document.querySelectorAll('.swiper-slide'))
  },
  mounted() {
    //console.log('mounted: ',document.querySelectorAll('.swiper-slide'))
    this.init()
  },
  methods: {
    init() {
      new Swiper('.swiper-container',{
        loop: true,
        pagination: '.swiper-pagination'
      })
    }
  },
  // watch:{
  //     lists(val,oldVal) {
  //     console.log(val,oldVal)
  //     console.log('before nextTick: ',document.querySelectorAll('.swiper-slide'))
  //     this.$nextTick(() => {
  //       console.log('after nextTick: ',document.querySelectorAll('.swiper-slide'))
  //     })
  //   }
  // }
}
</script>
<style>
  .swiper-slide img{
    width: 100%;
    height: 100%;
}
</style>
