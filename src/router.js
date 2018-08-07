import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Portfolio from './views/Portfolio.vue'
import Education from './views/Education.vue'

import PortfolioWorks from './components/PortfolioWorks.vue'

import Lessons from './components/Lessons.vue'
import StudioFloria from './components/StudioFloria.vue'
import Training from './components/Training.vue'
import StudentWorks from './components/StudentWorks.vue'

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
      component: Education,
      children: [
        { path: '',
          component: Lessons,
          name: 'lessons' },
        { path: 'studio_floria',
          component: StudioFloria,
          name: 'studio_floria' },
        { path: 'training',
          component: Training,
          name: 'training' },
        { path: 'student_works',
          component: StudentWorks,
          name: 'student_works' },
      ]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {selector: to.hash}
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
