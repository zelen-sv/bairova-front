<template>
  <div id="app">
    <main-spinner v-show="spinner"/>
    <div class="data" v-show="!spinner">
      <mob-menu/>
      <page-header @appLoaded="appLoaded"/>
      <navbar/>
      <router-view/>
      <page-footer/>
      <works-carousel/>
      <form-modal/>
    </div>
  </div>
</template>


<script>
  import MobMenu from '@/components/MobMenu.vue'
  import PageHeader  from '@/components/PageHeader.vue'
  import Navbar  from '@/components/Navbar.vue'
  import PageFooter from '@/components/PageFooter.vue'
  import WorksCarousel from '@/components/WorksCarousel.vue'
  import FormModal from '@/components/FormModal.vue'
  import MainSpinner from '@/components/MainSpinner.vue'

export default {
  data () {
    return {
      spinner: true
    }
  },
  components: {
    MobMenu, PageHeader, Navbar, PageFooter, WorksCarousel, FormModal, MainSpinner
  },
  methods: {
    appLoaded () {
      this.spinner = false
    }
  },
  metaInfo: {
    title: 'Людмила Баирова художник, учитель, дизайнер',
    meta: [
      {'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'description', content: 'Художник, учитель, дизайнер Людмила Баирова. Обучение детей и взрослых.'},

      {property: 'og:title', content: 'Художник, учитель, дизайнер Людмила Баирова. Обучение детей и взрослых.'},
      {property: 'og:url', content: 'http://bairova.by'},
      {property: 'og:image', content: '/img/social-bird.png'}
    ],
    links: [
      {rel: 'canonical', href: 'http://bairova.by'}
    ]
  }
}
</script>

<style lang="scss">
  @import "/assets/scss/index.scss";
</style>
