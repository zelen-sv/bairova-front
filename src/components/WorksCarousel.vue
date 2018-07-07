<template v-if="visible">
  <transition name="modal-fade" v-if="visible">
    <div class="modal-backdrop" role="dialog" @click.self.prevent="close">
      <div class="modal" ref="modal">
        <component :is="component" :work="currentWork" @next="next" @previus="previus"></component>
      </div>
    </div>
  </transition>
</template>

<script>
import EventHub from '@/utils/event_hub'
import PortfolioWork from '@/components/PortfolioWork'

export default {
  name: 'WorksCarousel',
  components: {
    PortfolioWork
  },
  data () {
    return {
      visible: false,
      component: 'PortfolioWork',
      works: [],
      activeWork: 0
    }
  },
  mounted () {
    EventHub.$on('openCarausel', (component, works, index) => {
      this.component = component
      this.works = works
      this.activateWork(index)
      this.show()
    })
  },
  computed: {
    currentWork() {
      return this.works[this.activeWork];
    }
  },
  watch: {
    visible () {
      let body  = document.getElementsByTagName('body')[0]
      this.visible ? body.classList.add("disable-scroll-modal") : body.classList.remove("disable-scroll-modal")
    }
  },
  methods: {
    show () {
      this.visible = true
    },
    close () {
      this.visible = false
    },
    next() {
        let active = this.activeWork + 1
        if(active >= this.works.length) {
            active = 0
        }
        this.activateWork(active)
    },
    previus() {
        let active = this.activeWork - 1
        if(active < 0) {
            active = this.works.length - 1
        }
        this.activateWork(active)
    },
    activateWork(workIndex) {
        this.activeWork = workIndex
    }
  }
}
</script>
