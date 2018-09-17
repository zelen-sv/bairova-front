<template>
  <nav class="navbar" id="navbar">
    <div class="navbar__wrapper">

      <ul class="navbar__list">
        <router-link to="/" tag="li" class="navbar__item">
          <a><img src="/img/LB.svg" class="navbar__home"></a>
        </router-link>
        <router-link to="/portfolio#portfolio-content" tag="li" class="navbar__item">
          <a>Портфолио</a>
        </router-link>
        <router-link to="/education#education-content" tag="li" class="navbar__item">
          <a>Обучение</a>
        </router-link>
        <router-link to="/about-me#about-me" tag="li" class="navbar__item">
          <a>О художнике</a>
        </router-link>
        <router-link to="/contacts" tag="li" class="navbar__item">
          <a>Контакты</a>
        </router-link>
        <li class="navbar__item"><a href="#">События</a></li>
      </ul>

    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
