import 'css/common.css'
import './index.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import Foot from 'components/Foot.vue'
import Swipe from 'components/Swipe.vue'

import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);

import bus from 'js/bus.js'

let app = new Vue({
  el:'#app',
  data: {
    lists:null,
    pageNum: 1,
    loading: false,
    allLoaded: false,
    pageSize:6,
    bannerLists: null,
    obj:{
      age:20
    }
  },
  created() {
    this.getLists()
    this.getBanner()
    bus.$on('change',(age) =>{
      console.log(age)
      this.obj.age = age
    })
  },
  methods: {
    // changeAge(age){
    //   console.log(age)
    //   this.obj.age = age
    // },
    getLists(){
      if(this.allLoaded) return 
      this.loading = true
      axios.get(url.hotLists,{
        pageNum:this.pageNum,
        pageSize: this.pageSize
      }).then(res => {
        let curLists = res.data.lists
        //判斷所有數據是否加載完畢
        if(curLists.length < this.pageSize) {
          this.allLoaded = true
        }
        if(this.lists) {
          this.lists = this.lists.concat(curLists)
        }else{
          this.lists = curLists
        }
      })
      this.pageNum++
      this.loading = false
    },
    getBanner() {
      axios.get(url.banner).then(res =>{
        this.bannerLists = res.data.lists
      })
    }
  },
  components: {
    Foot,
    Swipe
  }
  
})