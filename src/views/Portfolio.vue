<template>
  <main class="portfolio-content">
  	<div class="portfolio-content__wrapper">
  		<portfolio-sidebar/>
      <router-view/>
  	</div>
  </main>
</template>

<script>
  import PortfolioSidebar from '@/components/PortfolioSidebar.vue'
  import PortfolioWorks from '@/components/PortfolioWorks.vue'

  export default {
    components: {
      PortfolioSidebar, PortfolioWorks
    }
  }
</script>
