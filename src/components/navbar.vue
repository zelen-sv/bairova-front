<template>
  <nav class="navbar" id="navbar">
    <div class="navbar__wrapper">

      <ul class="navbar__list">
        <router-link to="/" tag="li" class="navbar__item navbar__item--active">
          <a><img src="img/LB.svg" class="navbar__home"></a>
        </router-link>
        <router-link to="/portfolio" tag="li" class="navbar__item">
          <a>Портфолио</a>
        </router-link>
        <router-link to="/education" tag="li" class="navbar__item">
          <a>Обучение</a>
        </router-link>
        <li class="navbar__item"><a href="#">О художнике</a></li>
        <li class="navbar__item"><a href="#">Контакты</a></li>
        <li class="navbar__item"><a href="#">События</a></li>
      </ul>

    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar'
}
</script>
