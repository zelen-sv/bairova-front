<template>
  <main class="portfolio-content">
  	<div class="portfolio-content__wrapper">

  		<portfolio_sidebar/>
      <portfolio_works/>

  	</div>
  </main>
</template>

<script>
  import portfolio_sidebar from '@/components/portfolio_sidebar.vue'
  import portfolio_works from '@/components/portfolio_works.vue'

  export default {
    components: {
      portfolio_sidebar, portfolio_works
    }
  }
</script>

