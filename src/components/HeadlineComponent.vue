<template>
  <div class="content-headline__wrapper">
    <div class="stripe--right-offset-20">&nbsp;</div>
    <div class="stripe--right-offset-60">&nbsp;</div>
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
  .decoration
    position: absolute
    background-color: rgba(0, 0, 0, 0.05)
    bottom: 0
  .stripe
    @extend .decoration
    top: 0
    width: 20px
    &--right-offset-20
      @extend .stripe
      right: 20px
      transform: skewX(-40deg)
    &--right-offset-60
      @extend .stripe
      right: 60px
      width: 20px
      transform: skewX(-40deg)
    &--left
      @extend .stripe
      left: 0
      width: 12px
.content-headline
  $font-color: rgba(0, 0, 0, 0.1)
  color: $font-color
  font-size: 2rem
  &__inner
    display: inline-block
    position: relative
</style>
