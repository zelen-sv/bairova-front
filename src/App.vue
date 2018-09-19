<template>
  <div id="app">
    <main-spinner v-show="spinner"/>
    <div class="data" v-show="!spinner">
      <mob-menu/>
      <page-header/>
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
  mounted () {
    this.spinner = false
  }
}
</script>

<style lang="scss">
  @import "/assets/scss/index.scss";
</style>
