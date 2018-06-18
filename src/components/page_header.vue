<template>
  <header class="header">

    <div class="header__keyvisual header__keyvisual--front header__keyvisual--day is-visible"></div>
    <div class="header__keyvisual header__keyvisual--back header__keyvisual--day is-visible" style="background-color: white"></div>

    <div class="header__wrapper">
      <div class="header__artist">
        <img src="img/artist-name-violet.svg" class="header__bairova"></img>
        <p class="header__mission">художник <img src="img/dot.svg" class="header__dot"> учитель <img src="img/dot.svg" class="header__dot"> дизайнер</p>
      </div>

      <div class="header__footer">
        <div class="header__social">
          <a href="#" class="header__vk"><img src="img/vk.svg"></a>
          <a href="#" class="header__insta"><img src="img/insta.svg"></a>
          <a href="#" class="header__fbook"><img src="img/fbook.svg"></a>
        </div>
        <button class="header__button request-button"><img src="img/ic-palette.svg">Заявка на обучение</button>
      </div>

    </div>
  </header>
</template>

<script>
export default {
  name: 'page_header'
}
</script>
