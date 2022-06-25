<template>
  <v-app>
    <v-main>
      <v-row>
          <HeaderComponent/>
      </v-row>
      <v-row>
        <v-col>
          <HeadlineComponent text="Experience"/>
          <ExperienceComponent/>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <HeadlineComponent text="Projects"/>
          <ProjectsComponent/>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <FooterComponent/>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent'
import ExperienceComponent from '@/components/ExperienceComponent'
import HeadlineComponent from '@/components/HeadlineComponent'
import ProjectsComponent from '@/components/ProjectsComponent'
import FooterComponent from '@/components/FooterComponent'

export default {
  name: 'App',

  components: {
    ExperienceComponent,
    HeaderComponent,
    HeadlineComponent,
    ProjectsComponent,
    FooterComponent
  },

  created() {
    document.title = 'Maximilian Bethke: Software-Developer with passion';
  },

  data: () => ({
  }),
};
</script>

<style lang="sass">
*
  box-sizing: border-box
.v-main
  background-color: #CDCDCD
  .row,
  .col
    margin: 0
    padding: 0
</style>
