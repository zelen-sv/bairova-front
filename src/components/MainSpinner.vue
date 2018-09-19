<template>
  <bounce-loader :color="spinner_color" class="main-spinner"></bounce-loader>
</template>

<script>
  import BounceLoader from 'vue-spinner/src/BounceLoader.vue'

  export default {
    data () {
      return {
        spinner_color: "#ffffff"
      }
    },
    components: {
      BounceLoader
    }
  }
</script>
