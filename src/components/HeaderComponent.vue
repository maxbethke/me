<template>
  <v-container class="header" fluid>
    <v-row>
      <v-col md="4" sm="12" class="pb-0">
        <v-img
            class="header__image"
            :src="headerSideImage"
            height="100vh"
        >
          <div class="gradient-border--to-right"></div>
          <div class="gradient-border--to-bottom"></div>
        </v-img>
      </v-col>
      <v-col class="pb-0">
        <div class="intro">
          <div class="intro__head">
            <p class="intro--standout"><b>Hi</b>, my name is</p>
            <h1 class="intro--name">Maximilian Bethke</h1>
          </div>
          <p>and I do</p>
          <p class="intro--standout specializationText">{{ getCurrentSpecializationText() }}</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import headerSideImage from '@/assets/Max-removed-banner.jpg'

export default {
  name: 'HeaderComponent',
  data: () => ({
    headerSideImage: headerSideImage,
    specializationText: 'Software-Development',
    specializationTextPosition: 1,
    typingSpeedStandardDeviation: 300,
    typingSpeed: 1000
  }),
  created() {
    setTimeout(this.raiseSpecializationTextPosition, this.typingSpeed)
  },
  methods: {
    getCurrentSpecializationText() {
      return this.specializationText.slice(0, this.specializationTextPosition)
    },
    raiseSpecializationTextPosition() {
      this.specializationTextPosition++
      const typingSpeed =
          this.typingSpeed = (
            + (Math.random()*this.typingSpeedStandardDeviation)
            - (this.typingSpeedStandardDeviation/2)
          )
      setTimeout(this.raiseSpecializationTextPosition, typingSpeed)
    }
  }
}
</script>
<style lang="sass">
@import '~vuetify/src/styles/settings/_variables'

.header
  position: relative
  background-color: #010101
  padding: 0
  color: white
  border-bottom: 10px solid grey
  .gradient-border
    $gradient-width: 50px
    position: absolute
    right: 0
    bottom: 0
    &--to-right
      @extend .gradient-border
      top: 0
      bottom: 0
      width: $gradient-width
      background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))
    &--to-bottom
      @extend .gradient-border
      display: none
      left: 0
      height: $gradient-width
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))
  .intro
    font-size: 1.5rem
    padding: 1.5em !important
    .intro__head
      margin-bottom: 1em
    &--standout
      font-size: 1.5em
    &--name
      font-size: 3em
    p
      margin: 0 !important
.specializationText
  position: relative
  display: inline-block
  font-family: Monospace, sans-serif
  &::after
    position: absolute
    content: ' '
    right: 0
    bottom: 10px
    width: 20px
    background: white
    height: 3px
    opacity: 0
    animation: cursor-blink 1.5s steps(1) infinite

@keyframes cursor-blink
  50%
    opacity: 1

@media #{map-get($display-breakpoints, 'sm-and-down')}
  .gradient-border
    &--to-right
      display: none !important
    &--to-bottom
      display: block !important
  .intro
    margin: 4em 0 !important
</style>
