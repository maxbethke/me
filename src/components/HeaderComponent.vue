<template>
  <v-container class="header" fluid>
    <v-row>
      <v-col cols="4" class="pb-0">
        <v-img
            class="header__image"
            :src="headerSideImage"
            height="100vh"
        >
          <div class="gradient-border--to-right"></div>
        </v-img>
      </v-col>
      <v-col class="pb-0">
        <div class="intro">
          <div class="intro__head">
            <p class="intro--standout"><b>Hi</b>, my name is</p>
            <h1 class="intro--name">Maximilian Bethke</h1>
          </div>
          <p>and I do</p>
          <p class="intro--standout">Software-Development</p>
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
  }),
}
</script>
<style lang="sass">
.header
  position: relative
  background-color: #010101
  color: white
  border-bottom: 10px solid grey
  .gradient-border
    position: absolute
    right: 0
    &--to-right
      @extend .gradient-border
      top: 0
      bottom: 0
      width: 50px
      background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))
    &--to-bottom
      @extend .gradient-border
      top: 100%
      left: 0
      height: 200px
      background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))
  .intro
    padding: 2em 1em !important
    .intro__head
      margin-bottom: 1em
    &--standout
      font-size: 1.5em
    &--name
      font-size: 3em
    p
      margin: 0 !important
</style>
