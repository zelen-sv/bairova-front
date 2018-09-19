<template>
  <transition name="modal-fade" v-if="visible">
    <div class="modal-backdrop" role="dialog" @click.self.prevent="close">
      <v-touch class="modal modal_carousel" ref="modal" @swipeleft="previus" @swiperight="next">
        <component :is="component" :work="currentWork" @next="next" @previus="previus" @close="close"></component>
      </v-touch>
    </div>
  </transition>
</template>

<script>
import EventHub from '@/utils/event_hub'
import PortfolioWork from '@/components/PortfolioWork'
import StudentWork from '@/components/StudentWork'

export default {
  name: 'WorksCarousel',
  components: {
    PortfolioWork, StudentWork
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
      this.changeModalState()
      this.resetEventListener()
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
    },
    changeModalState () {
      let body  = document.getElementsByTagName('body')[0]
      this.visible ? body.classList.add("disable-scroll-modal") : body.classList.remove("disable-scroll-modal")
    },
    resetEventListener () {
      this.visible ? this.addKeyListener() : this.removeKeyListener()
    },
    addKeyListener () {
      window.addEventListener('keydown', this.keyboardControls, false)
    },
    removeKeyListener () {
      window.removeEventListener('keydown', this.keyboardControls, false)
    },
    keyboardControls (e) {
      if (e.keyCode == 37) {
        this.previus()
      } else if (e.keyCode == 39) {
        this.next()
      }
    }
  }
}
</script>
