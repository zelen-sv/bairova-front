<template>
  <div class="carousel">

    <div class="carousel__image-part">
    	<img src="img/homepage-oil3.jpg" class="carousel__image">
    	<div class="carousel__buttons"><button @click="$emit('previus')" class="carousel__button carousel__button-prev"></button><button @click="$emit('next')" class="carousel__button carousel__button-next"></button></div>
    </div>

    <div class="carousel__info-part">
    	<p class="carousel__title"><img src="/img/dot.svg" class="carousel__dot">Название 01<img src="/img/dot.svg" class="carousel__dot"></p>
    	<p class="carousel__technique">Техника: горячий батик, шелк</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'PortfolioWork',
  props: ['work']
}
</script>
