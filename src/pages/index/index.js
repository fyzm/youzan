import 'css/common.css'
import './index.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'

import { InfiniteScroll } from 'mint-ui';

Vue.use(InfiniteScroll);

console.log(axios)
let app = new Vue({
  el:'#app',
  data: {
    lists:null,
    pageNum: 1,
    loading: false,
    allLoaded: false,
    pageSize:6
  },
  created() {
    this.getLists()
  },
  methods: {
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
    }
  }
})