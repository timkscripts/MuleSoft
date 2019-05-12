// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueResource from 'vue-resource'
import VueRouter from 'vue-router'
Vue.use(vueResource)
Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.http.headers.common['Access-Control-Allow-Origin'] = true
Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'
/* eslint-disable no-new */

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/hey'
      // You could also have named views at tho top
    }
  ]
})
router.push('/hey')

new Vue({
  router,
  el: '#app',
  /* template: '<App/>', */
  mounted: function () {
    console.log(this.$http)
  },
  components: { App },
  data () {
    return {
      message: 'You loaded this page on ' + new Date().toLocaleString(),
      list: '',
      responseHello: '',
      weather: []
    }
  },
  created: function () {
    this.$http.get('/HelloWorld'
    ).then(function (response) {
      // Success
      this.responseHello = response.body
    }, function (response) {
      // Error
    })
  }
})
