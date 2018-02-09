// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import FastClick from 'fastclick'
import './config/rem'
import './config/flexible'
import './style/base/reset.scss'
import './style/base/common.scss'

FastClick.attach(document.body)
Vue.config.productionTip = false

Vue.use(VueRouter)
const router = new VueRouter({
  routes
})

new Vue({
  router
}).$mount('#app')
