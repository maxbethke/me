<template>
  <v-app>
    <v-main>
      <v-row>
        <v-col class="pb-0">
          <HeaderComponent/>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="pt-0">
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
          <HeadlineComponent text="About"/>
          <AboutComponent/>
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
import AboutComponent from '@/components/AboutComponent'
import FooterComponent from '@/components/FooterComponent'

export default {
  name: 'App',

  components: {
    ExperienceComponent,
    HeaderComponent,
    HeadlineComponent,
    ProjectsComponent,
    FooterComponent,
    AboutComponent
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
body, .v-main
  background-color: #CDCDCD
  overflow: hidden
</style>
