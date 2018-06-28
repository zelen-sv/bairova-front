import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Portfolio from './views/Portfolio.vue'
<<<<<<< HEAD
import portfolio_works from './components/portfolio_works'
=======
import Education from './views/Education.vue'
>>>>>>> d353f5b0d7b8cf957603d740542c6222a064cac3

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/portfolio/:type',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/education',
      name: 'education',
      component: Education
    }
  ]
})
