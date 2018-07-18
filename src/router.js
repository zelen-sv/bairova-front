import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Portfolio from './views/Portfolio.vue'
import Education from './views/Education.vue'

import PortfolioWorks from './components/PortfolioWorks.vue'

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
      path: '/portfolio',
      component: Portfolio,
      children: [
        { path: '',
          component: PortfolioWorks,
          name: 'batik',
          props: { category: 'batik' } },
        { path: 'painting',
          component: PortfolioWorks,
          name: 'painting',
          props: { category: 'painting' } },
        { path: 'watercolor',
          component: PortfolioWorks,
          name: 'watercolor',
          props: { category: 'watercolor' } },
        { path: 'graphic_arts',
          component: PortfolioWorks,
          name: 'graphic_arts',
          props: { category: 'graphic_arts' } },
        { path: 'illustration',
          component: PortfolioWorks,
          name: 'illustration',
          props: { category: 'illustration' } },
        { path: 'design',
          component: PortfolioWorks,
          name: 'design',
          props: { category: 'design' } },
      ]
    },
    {
      path: '/education',
      name: 'education',
      component: Education
    }
  ]
})
