<template>
  <footer class="footer">
    <div class="footer__wrapper">

      <div class="footer__contacts">
        <div class="footer__mini-wrapper">
          <div class="footer__phone">
            <img src="img/phone.svg">
            <p class="footer__phone-number">+375 29 509 10 17 <span class="footer__messengers">(Viber, Telegram)</span></p>
          </div>
          <div class="footer__mail">
            <img src="img/mail.svg">
            <p>degtyar.ana@mail.ru</p>
          </div>
        </div>
      </div>

      <div class="footer__artist">
        <div class="footer__mini-wrapper">
          <img src="img/artist-name.svg" class="footer__name">
          <div class="footer__social"><img src="img/vk-footer.svg"><img src="img/insta-footer.svg"><img src="img/fbook-footer.svg"></div>
        </div>
      </div>

    </div>
     <!--<div class="footer__developer">
      <p class="footer__devider">Разработка сайта <span class="footer__developer-link">webstone.by</span></p>
    </div>-->
    <div class="footer__developer">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" class="footer__developer-table">
        <tr>
          <td width="35%"><hr></td>
          <td width="20%" class="footer__developer-text">Разработка сайта <a href="#" class="footer__developer-link">webstone.by</a></td>
          <td width="35%"><hr></td>
        </tr>
      </table>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'page_footer'
}
</script>
