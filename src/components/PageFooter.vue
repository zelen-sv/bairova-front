<template>
  <footer class="footer">
    <div class="footer__wrapper">

      <div class="footer__contacts">
        <div class="footer__mini-wrapper">
          <div class="footer__phone">
            <img src="/img/phone.svg">
            <p class="footer__phone-number">+375 29 365 21 10 <span class="footer__messengers">(Viber, Telegram)</span></p>
          </div>
          <div class="footer__mail">
            <img src="/img/mail.svg">
            <p>bairova.info@mail.ru</p>
          </div>
        </div>
      </div>

      <div class="footer__artist">
        <div class="footer__mini-wrapper">
          <img src="/img/artist-name.svg" class="footer__name">
          <div class="footer__social">
            <a href="https://vk.com/id176716374" target="_blank"><img src="/img/vk-footer.svg"></a>
            <a href="https://www.instagram.com/milabairova/" target="_blank"><img src="/img/insta-footer.svg"></a>
            <a href="https://www.facebook.com/bair.taurus" target="_blank"><img src="/img/fbook-footer.svg"></a></div>
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
          <td width="20%" class="footer__developer-text">Разработка сайта <a href="https://www.instagram.com/lemari.studio/" target="_blank" class="footer__developer-link">LEMARI</a></td>
          <td width="35%"><hr></td>
        </tr>
      </table>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'PageHeader'
}
</script>
