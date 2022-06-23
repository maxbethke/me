<template>
  <div class="content-headline__wrapper">
    <div class="stripe--right">&nbsp;</div>
    <div class="stripe--left">&nbsp;</div>
    <v-container class="content-headline">
      <h2 class="content-headline__inner">{{ text }}</h2>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "HeadlineComponent",
  props: {
    text: String
  }
}
</script>

<style lang="sass" scoped>
.content-headline__wrapper
  background-color: rgba(0, 0, 0, 0.1)
  position: relative
  .stripe
    position: absolute
    background-color: rgba(0, 0, 0, 0.02)
    bottom: 0
    top: 0
    &--right
      @extend .stripe
      right: 60px
      width: 100px
      transform: skewX(-40deg)
    &--left
      @extend .stripe
      left: 0
      width: 12px
.content-headline
  color: white
  font-size: 2rem
  &__inner
    display: inline-block
    text-shadow: 1px 1px rgba(0, 0, 0, 0.2)
</style>
