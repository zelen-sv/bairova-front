<template>
  <main class="portfolio-content">
  	<div class="portfolio-content__wrapper">
  		<portfolio-sidebar/>
      <portfolio-works/>
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

