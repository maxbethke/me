<template>
  <v-card>
    {{ JSON.stringify(project) }}
  </v-card>
</template>

<script>
export default {
  name: "ProjectComponent",
  props: {
    project: Object
  },
  created() {
    console.log(this.project)
  }
}
</script>

<style scoped>

</style>
