<template>
  <v-container>
    <div v-if="projects.length > 0">
      <div
          v-for="item in projects"
          :key="item._id"
      >
        <ProjectComponent :project="item"/>
      </div>
    </div>
    <v-alert v-if="projects.length < 1 &&! isLoading &&! loadingError" type="info">
      No projects found... thats odd
    </v-alert>
    <v-alert v-if="isLoading" type="info">
      Loading projects...
    </v-alert>
    <v-alert v-if="loadingError" type="error">
      There was an error loading my projects.
    </v-alert>
  </v-container>
</template>

<script>
import ApiService from '@/services/ApiService'
import ProjectComponent from '@/components/ProjectComponent'

export default {
  name: "ProjectsComponent",
  components: {
    ProjectComponent
  },
  data: () => ({
    projects: [],
    loadingError: false,
    isLoading: true
  }),
  async created() {
    try {
      this.projects = await ApiService.queryNotion('projects')
    } catch (e) {
      this.loadingError = true
    } finally {
      this.isLoading = false
    }
  }
}
</script>

<style scoped>

</style>
