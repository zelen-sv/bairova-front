<template>
  <div id="app">
    <mob-menu/>
    <page-header/>
    <navbar/>
    <router-view/>
    <page-footer/>
    <works-carousel/>
  </div>
</template>


<script>
  import MobMenu from '@/components/MobMenu.vue'
  import PageHeader  from '@/components/PageHeader.vue'
  import Navbar  from '@/components/Navbar.vue'
  import PageFooter from '@/components/PageFooter.vue'
  import WorksCarousel from '@/components/WorksCarousel.vue'

export default {
  components: {
    MobMenu, PageHeader, Navbar, PageFooter, WorksCarousel
  }
}
</script>

<style lang="scss">
  @import "/assets/scss/index.scss";
</style>
