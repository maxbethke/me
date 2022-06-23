<template>
  <v-app>
    <v-main>
      <v-row>
          <HeaderComponent/>
      </v-row>
      <v-row>
<!--        <v-col>-->
<!--          <SidebarComponent/>-->
<!--        </v-col>-->
        <v-col class="pt-0">
          <HeadlineComponent text="Experience"/>
          <ExperienceComponent/>
          <HeadlineComponent text="Projects"/>
          <ProjectsComponent/>
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

export default {
  name: 'App',

  components: {
    ExperienceComponent,
    HeaderComponent,
    HeadlineComponent,
    ProjectsComponent
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
</style>
