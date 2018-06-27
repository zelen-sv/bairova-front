<template>
  <div class="portfolio-content__gallery">
    <img v-for="work in works" :src="'http://localhost:3000'+ work.picture.url" class="portfolio-content__gallery-item">
  </div>
</template>

<script>
  import request from '@/utils/axios_request'

  export default {
    name: 'portfolio_works',
    data () {
      return {
        works: []
      }
    },
    created () {
      let self = this
      request.get('works', { params: { category: self.$route.params.type } })
      .then(response => { self.works = response.data })
    }
  }
</script>
