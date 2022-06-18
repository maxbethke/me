<template>
  <v-container>
    <span>During my <b>{{ yearsSinceStart.toFixed(1) }}</b> years in the craft, I had the pleasure to work
      with many exciting technologies, such as</span>
    <BulletListComponent :retriever="query" retrieverArgument="techstack"/>
    <span>in which I was able to learn a lot about</span>
    <BulletListComponent :retriever="query" retrieverArgument="tools" color="slateblue"/>
    <br />
    <span>I have learned to love these tools, as I use them on a daily basis</span>
    <BulletListComponent :retriever="query" retrieverArgument="languages" color="darkgreen"/>
    <br />
    <span>Big projects are not completed alone. I thrive to work in teams that can do more than simply the sum of their
      members.</span>
    <BulletListComponent :retriever="query" retrieverArgument="softskills" color="gray"/>
  </v-container>
</template>

<script>
import BulletListComponent from '@/components/BulletListComponent'
import ApiService from '@/services/ApiService'

export default {
  name: 'ExperienceComponent',
  components: { BulletListComponent },
  data: () => ({
    startDate: '2021-04-01',
    yearsSinceStart: 0,
  }),
  created() {
    this.yearsSinceStart = (new Date().getTime()-new Date(this.startDate).getTime())/1000/(60*60*24*365)
  },
  methods: {
    query(database) {
      return ApiService.queryNotion(database)
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
