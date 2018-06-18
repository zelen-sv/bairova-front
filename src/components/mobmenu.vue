<template>
  <div class="mobmenu">
    <button class="mobmenu__toggle"></button>
    <nav>
      <ul class="mobmenu_navigation">
        <router-link to="/" class="mobmenu__item" tag="li">
          <span>Главная</span>
        </router-link>
        <router-link to="/portfolio" class="mobmenu__item" tag="li">
          <span>Портфолио</span>
        </router-link>
        <li class="mobmenu__item"><span href="#">Обучение</span></li>
        <li class="mobmenu__item"><span href="#">О художнике</span></li>
        <li class="mobmenu__item"><span href="#">Контакты</span></li>
        <li class="mobmenu__item"><span href="#">События</span></li>
        <li class="mobmenu__item"><button class="mobmenu__button request-button"><img src="img/ic-palette.svg">Заявка на обучение</button></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'mobmenu'
}
</script>
