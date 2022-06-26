<template>
  <div>
    <v-progress-linear
        v-show="isLoading"
        indeterminate
        color="primary"
    ></v-progress-linear>
    <v-container>
      <div class="projects">
        <div
            v-for="item in projects"
            :key="item._id"
        >
          <ProjectComponent :project="item"/>
        </div>
      </div>
      <v-alert v-if="projects.length < 1 &&! isLoading &&! loadingError" type="info">
        No projects found
      </v-alert>
      <v-alert v-if="loadingError" type="error">
        There was an error loading my projects.
      </v-alert>
    </v-container>
  </div>
</template>

<script>
import { queryNotion } from '@/services/ApiService'
import ProjectComponent from '@/components/ProjectComponent'

export default {
  name: "ProjectsComponent",
  components: {
    ProjectComponent
  },
  data: () => ({
    projects: new Array(9).fill({isLoading: true}),
    loadingError: false,
    isLoading: true
  }),
  async created() {
    try {
      this.projects = await queryNotion('projects')
      this.projects.sort((a, b) => {
        if(!Object.prototype.hasOwnProperty.call(a, 'until') || a.until === null) return -1
        if(a.until > b.until) return -1
        return 0
      })
    } catch (e) {
      this.loadingError = true
    } finally {
      this.isLoading = false
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~vuetify/src/styles/settings/_variables'

.projects
  display: grid
  grid-template-columns: 1fr 1fr 1fr
  grid-gap: 12px

@media #{map-get($display-breakpoints, 'sm-and-down')}
  .projects
    grid-template-columns: 1fr
</style>
