<template>
  <div id="app">
    <mobmenu/>
    <page_header/>
    <navbar/>
    <router-view/>
    <page_footer/>
  </div>
</template>


<script>
  import mobmenu from '@/components/mobmenu.vue'
  import page_header  from '@/components/page_header.vue'
  import navbar  from '@/components/navbar.vue'
  import page_footer  from '@/components/page_footer.vue'

export default {
  components: {
    mobmenu, page_header, navbar, page_footer
  }
}
</script>

<style lang="scss">
  @import "/assets/scss/index.scss";
</style>
