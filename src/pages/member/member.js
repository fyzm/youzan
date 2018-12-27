
//1.使用vue-router
import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

let routes = [{
  path: '/',
  component: require('./components/member.vue').default
},{
  path: '/address',
  component: require('./components/address.vue').default,
  children: [{
    path: '',
    redirect: 'all'
  },{
    path: 'all',
    component: require('./components/all.vue').default
  },{
    path: 'form',
    component: require('./components/form.vue').default
  }]
}]

let router = new Router({
  routes
})

new Vue({
  el: '#app',
  router
})