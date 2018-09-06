<template>
  <div class="mobmenu">
    <button class="mobmenu__toggle" @click="toggleMenu"></button>
    <nav>
      <ul class="mobmenu_navigation">
        <router-link to="/" class="mobmenu__item" tag="li">
          <span @click="toggleMenu">Главная</span>
        </router-link>
        <router-link to="/portfolio" class="mobmenu__item" tag="li">
          <span @click="toggleMenu">Портфолио</span>
        </router-link>
        <router-link to="/education" class="mobmenu__item" tag="li">
          <span @click="toggleMenu">Обучение</span>
        </router-link>
        <router-link to="/about-me" class="mobmenu__item" tag="li">
          <span @click="toggleMenu">О художнике</span>
        </router-link>
        <router-link to="/contacts" class="mobmenu__item" tag="li">
          <span @click="toggleMenu">Контакты</span>
        </router-link>
        <li @click="toggleMenu" class="mobmenu__item"><span href="#">События</span></li>
        <li @click="toggleMenu" class="mobmenu__item"><button class="mobmenu__button request-button" @click="openFormModal()"><img src="img/ic-palette.svg">Заявка на обучение</button></li>
      </ul>
    </nav>
  </div>
</template>

<script>
  import EventHub from '@/utils/event_hub'

export default {
  methods: {
    openFormModal () {
      EventHub.$emit('openFormModal');
    },
    toggleMenu () {
      $('body').toggleClass('open');
    }
  }
}
</script>

