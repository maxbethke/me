<template>
  <v-container class="sidebar">
    <v-img
        class="sidebar__image"
        :src="headerSideImage"
        height="105vh"
    >
      <div class="gradient-border--to-right"></div>
      <div class="gradient-border--to-bottom"></div>
    </v-img>
  </v-container>
</template>

<script>
import headerSideImage from '@/assets/Max-removed-banner.jpg'

export default {
  name: 'SidebarComponent',
  data: () => ({
    headerSideImage: headerSideImage,
  }),
}
</script>

<style lang="sass" scoped>
.sidebar
  padding: 0 !important
  height: 100%
  &__image
    height: 105vh
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
</style>
