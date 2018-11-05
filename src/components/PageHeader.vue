<template>
  <header class="header">

    <div class="header__keyvisual header__keyvisual--front header__keyvisual--day is-visible"></div>
    <div class="header__keyvisual header__keyvisual--back header__keyvisual--day is-visible" style="background-color: white"></div>

    <div class="header__wrapper">
      <div class="header__artist">
        <img src="/img/artist-name-violet.svg" class="header__bairova"></img>
        <p class="header__mission">художник <img src="/img/dot.svg" class="header__dot"> учитель <img src="/img/dot.svg" class="header__dot"> дизайнер</p>
      </div>

      <div class="header__footer">
        <div class="header__social">
          <a href="https://vk.com/id176716374" target="_blank" class="header__vk"><img src="/img/vk.svg"></a>
          <a href="https://www.instagram.com/milabairova/" target="_blank" class="header__insta"><img src="/img/insta.svg"></a>
          <a href="https://www.youtube.com/channel/UCKMJOxjADLd4wwWimVqhHPg" target="_blank" class="header__youtube"><img src="/img/youtube.svg"></a>
        </div>
        <button class="header__button request-button" @click="openFormModal()"><img src="/img/ic-palette.svg">Заявка на обучение</button>
      </div>

    </div>
  </header>
</template>

<script>
  import imagesLoaded from 'imagesloaded'
  import EventHub from '@/utils/event_hub'

export default {
  name: 'PageHeader',
  mounted () {
    imagesLoaded( '.header__keyvisual', {
      background: true
    }, ( imgLoad ) => {
      this.$emit('appLoaded')
    })
  },
  methods: {
    openFormModal () {
      EventHub.$emit('openFormModal');
    }
  }
}
</script>
