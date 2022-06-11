<template>
  <v-container class="header" fluid>
    <v-row>
      <v-col cols="4" class="pa-0">
        <v-container class="header__side">
          <v-img
              class="header__side-image"
              :src="headerSideImage"
          >
            <div class="gradient-border--to-right"></div>
            <div class="gradient-border--to-bottom"></div>
          </v-img>
        </v-container>
      </v-col>
      <v-col>
        <v-container class="header__main">
          <div class="intro">
            <div class="intro__head">
              <p class="intro__head--subline"><b>Hi</b>, my name is</p>
              <h1 class="intro__head--mainline">Maximilian Bethke</h1>
            </div>
            <p class="intro--subline">and I do</p>
            <p class="intro--mainline">Software-Development</p>
          </div>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import headerSideImage from '@/assets/Max-removed-banner.jpg'

export default {
  name: 'HeaderComponent',
  data: () => ({
    headerSideImage: headerSideImage
  }),
}
</script>
<style lang="sass">
.header
  padding: 0 !important
  &__side
    margin-right: 50px
  &__side-image
    $gradient-width: 50px
    .gradient-border
      position: absolute
      right: 0
      bottom: 0
      &--to-right
        @extend .gradient-border
        top: 0
        width: $gradient-width
        background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))
      &--to-bottom
        @extend .gradient-border
        left: 0
        height: $gradient-width
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))
  &__main
    .intro
      margin: 1rem
      .intro__head
        margin-bottom: 1em
        $size: 5rem
        &--subline
          font-size: $size*0.6
      $size: 3rem
      font-size: $size
      &--subline
        font-size: $size*0.6
      p
        margin: 0 !important
</style>
