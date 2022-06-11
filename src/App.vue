<template>
  <v-app>
    <v-main>
      <HeaderComponent/>
    </v-main>
  </v-app>
</template>

<script>

import HeaderComponent from '@/components/HeaderComponent'

export default {
  name: 'App',

  components: {
    HeaderComponent
  },

  data: () => ({
  }),
};
</script>

<style lang="sass">
.v-main
  background-color: #010101
  color: white
</style>
