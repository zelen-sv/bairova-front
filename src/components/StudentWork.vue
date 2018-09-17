<template>
  <div class="carousel">

    <div class="carousel__image-part">
      <img :src="work.picture.url" class="carousel__image"/>
    </div>

    <div class="carousel__info-part">
      <div class="carousel__info-up">
        <p class="carousel__title"><img src="/img/yellow-dot.svg" class="carousel__dot">{{ work.title }}<img src="/img/yellow-dot.svg" class="carousel__dot"></p>
        <p class="carousel__author">{{ work.author }}</p>
      </div>

      <div class="carousel__info-bottom">
        <p class="carousel__technique">{{ work.technique }}</p>
        <div class="carousel__buttons-container">
          <div class="carousel__buttons">
            <button @click="$emit('previus')" class="carousel__button carousel__button-prev">
            </button>
            <button @click="$emit('next')" class="carousel__button carousel__button-next">
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ['work']
}
</script>
