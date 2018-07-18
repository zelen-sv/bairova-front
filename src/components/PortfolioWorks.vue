<template>
  <div class="portfolio-content__gallery gallery">
    <div class="portfolio__spinner" v-show="loading">
      <bounce-loader :loading="loading" :color="spinner_color"></bounce-loader>
    </div>
    <transition-group name="work-fade">
      <div v-show="!loading"
           v-for="(work, index) in works"
           :key="work.id"
           @click="openWorksCarausel(index);"
           :style="{ backgroundImage: `url(${work.picture.url})` }"
           class="gallery__item">
      </div>
    </transition-group>
  </div>
</template>

<script>
  import request from '@/utils/axios_request'
  import requestWithDelay from '@/utils/request_with_delay'
  import EventHub from '@/utils/event_hub'
  import BounceLoader from 'vue-spinner/src/BounceLoader.vue'

  export default {
    components: {
      BounceLoader
    },
    props: {
      category: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        works: [],
        loading: false,
        spinner_color: "#47276A"
      }
    },
    created () {
      this.updateWorks()
    },
    watch: {
      category () {
        this.updateWorks()
      }
    },
    methods: {
      getWorksFromApi () {
        let self = this
        return request.get('works', { params: { category: self.category } })
      },
      updateWorks () {
        this.loading = true
        requestWithDelay(this.getWorksFromApi(), 1000)
        .then(response => {
          this.works = response.data
          this.loading = false
        })
      },
      openWorksCarausel (index) {
        EventHub.$emit('openCarausel', 'PortfolioWork', this.works, index);
      }
    }
  }
</script>
