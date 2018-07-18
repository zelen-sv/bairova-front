<template>
  <div class="portfolio-content__sidebar sidebar">
    <ul class="sidebar__nav">
      <router-link to="/portfolio" tag="li" class="sidebar__item">
        <a>Батик</a>
      </router-link>
      <router-link to="/portfolio/painting" tag="li" class="sidebar__item">
        <a>Живопись</a>
      </router-link>
      <router-link to="/portfolio/watercolor" tag="li" class="sidebar__item">
        <a>Акварель</a>
      </router-link>
      <router-link to="/portfolio/graphic_arts" tag="li" class="sidebar__item">
        <a>Графика</a>
      </router-link>
      <router-link to="/portfolio/illustration" tag="li" class="sidebar__item">
        <a>Иллюстрация</a>
      </router-link>
      <router-link to="/portfolio/design" tag="li" class="sidebar__item">
        <a>Дизайн</a>
      </router-link>
    </ul>
    <div class="portfolio-content__contacts">
      <img src="/img/element01_top.svg">
      <p>О возможности приобретения картин можно узнать по:</p>
      <div class="portfolio-content__contacts-info">
        <div class="portfolio-content__phone"><img src="/img/phone.svg"><p>+375 29 509 10 17</p></div>
        <div class="portfolio-content__mail"><img src="/img/mail.svg"><p>degtyar.ana@mail.ru</p></div>
      </div>
      <img src="/img/element01_bottom.svg">
    </div>
  </div>
</template>
