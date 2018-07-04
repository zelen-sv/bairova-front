<template>
  <div id="app">
    <mob-menu/>
    <page-header/>
    <navbar/>
    <router-view/>
    <page-footer/>
    <modal v-show="isModalVisible" :component="modalComponent" :portfolioWork="portfolioWork"/>
  </div>
</template>


<script>
  import MobMenu from '@/components/MobMenu.vue'
  import PageHeader  from '@/components/PageHeader.vue'
  import Navbar  from '@/components/Navbar.vue'
  import PageFooter from '@/components/PageFooter.vue'
  import Modal from '@/components/Modal.vue'
  import EventHub from '@/utils/event_hub'

export default {
  components: {
    MobMenu, PageHeader, Navbar, PageFooter, Modal
  },
  data () {
    return {
      isModalVisible: false,
      modalComponent: '',
      portfolioWork: ''
    };
  },
  mounted () {
    EventHub.$on('showModal', (component) => {
        this.isModalVisible = true
        this.modalComponent = component
    }),
    EventHub.$on('hideModal', () => {
        this.isModalVisible = false
    }),
    EventHub.$on('setCurrentPortfolioWork', (work) => {
      this.portfolioWork = work
    })
  },
  watch: {
    isModalVisible () {
      let body  = document.getElementsByTagName('body')[0]
      if (this.isModalVisible) {
        body.classList.add("modal")
      } else {
        body.classList.remove("modal")
      }
    }
  }
}
</script>

<style lang="scss">
  @import "/assets/scss/index.scss";
</style>
