<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" role="dialog" @click.self.prevent="close">
      <div class="modal" ref="modal">
        <component v-if="component == 'PortfolioWork'" :is="component" :work="portfolioWork"></component>
      </div>
    </div>
  </transition>
</template>

<script>
import EventHub from '@/utils/event_hub'
import PortfolioWork from '@/components/PortfolioWork'

export default {
  name: 'Modal',
  components: {
    PortfolioWork
  },
  props: [ 'component', 'portfolioWork' ],
  methods: {
    close () {
      EventHub.$emit('hideModal');
    }
  }
}
</script>
