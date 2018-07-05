<template>
  <div>
    <div>{{ work.title }}</div>
    <img :src="work.picture.url">
    <div>{{ work.technique }}</div>
    <div><button @click="$emit('next')">next</button><button @click="$emit('previus')">prev</button></div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioWork',
  props: ['work']
}
</script>
