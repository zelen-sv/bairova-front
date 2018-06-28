<template>
  <div class="portfolio-content__sidebar">
    <ul class="portfolio-content__nav">
      <router-link to="/batik" tag="li" class="portfolio-content__nav-item">
        <a>Батик</a>
      </router-link>
      <router-link to="/painting" tag="li" class="portfolio-content__nav-item">
        <a>Живопись</a>
      </router-link>
      <router-link to="/watercolor" tag="li" class="portfolio-content__nav-item">
        <a>Акварель</a>
      </router-link>
      <router-link to="/graphic_arts" tag="li" class="portfolio-content__nav-item">
        <a>Графика</a>
      </router-link>
      <router-link to="/illustration" tag="li" class="portfolio-content__nav-item">
        <a>Иллюстрация</a>
      </router-link>
      <router-link to="/design" tag="li" class="portfolio-content__nav-item">
        <a>Дизайн</a>
      </router-link>
    </ul>
    <div class="portfolio-content__contacts">
      <img src="img/element01_top.svg">
      <p>О возможности приобретения картин можно узнать по:</p>
      <div class="portfolio-content__contacts-info">
        <div class="portfolio-content__phone"><img src="img/phone.svg"><p>+375 29 509 10 17</p></div>
        <div class="portfolio-content__mail"><img src="img/mail.svg"><p>degtyar.ana@mail.ru</p></div>
      </div>
      <img src="img/element01_bottom.svg">
    </div>
  </div>
</template>
