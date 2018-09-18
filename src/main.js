import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueTouch from 'vue-touch'
import VueProgressiveImage from 'vue-progressive-image'
import feather from 'vue-icon'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(feather, 'v-icon')
Vue.use(VueProgressiveImage)
