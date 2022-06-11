<template>
  <v-app>
    <v-main>
      <v-row class="header-row">
        <v-col cols="4" class="sidebar-wrapper">
          <SidebarComponent/>
        </v-col>
        <v-col>
          <HeaderComponent/>
        </v-col>
      </v-row>
      <v-row>
        <ExperienceComponent/>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent'
import ExperienceComponent from '@/components/ExperienceComponent'
import SidebarComponent from '@/components/SidebarComponent'

export default {
  name: 'App',

  components: {
    SidebarComponent,
    ExperienceComponent,
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
  font-size: 1.5rem
  .header-row
    margin-bottom: 50px
    height: 105vh
</style>
