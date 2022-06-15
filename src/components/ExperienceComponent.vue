<template>
  <v-container>
    <span>During my <b>{{yearsSinceStart.toFixed(1) }}</b> years in the craft, I had the pleasure to work
      with many exciting technologies, such as</span>
    <BulletListComponent :list="techstack"/>
    <span>in why I was able to learn a lot about</span>
    <BulletListComponent :list="languages" color="slateblue"/>
    <br />
    <span>I have learned to love these tools, as I use them on a daily basis living my dream</span>
    <BulletListComponent :list="tools" color="darkgreen"/>
    <br />
    <span>Big projects are not done alone. I thrive to work in teams that can do more than simply the sum of their
      members.</span>
    <BulletListComponent :list="softSkills" color="gray"/>
  </v-container>
</template>

<script>
import BulletListComponent from '@/components/BulletListComponent'

export default {
  name: 'ExperienceComponent',
  components: { BulletListComponent },
  data: () => ({
    startDate: '2021-04-01',
    yearsSinceStart: 0,
    techstack: [
      {name: 'Symfony', exp: 4, field: 'be'},
      {name: 'Vue.js', exp: 5, field: 'fe'},
      {name: 'MySQL', exp: 8, field: 'db'},
      {name: 'MongoDB', exp: 4, field: 'db'},
      {name: 'Node.js', exp: 3, field: 'be'},
      {name: 'npm', exp: 8, field: 'pkg'},
      {name: 'composer', exp: 9, field: 'pkg'},
      {name: 'Angular', exp: 2, field: 'fe'},
      {name: 'Express.js', exp: 5, field: 'be'},
      {name: 'nginx', exp: 8, field: 'be'},
      {name: 'Apache2', exp: 7, field: 'be'},
      {name: 'IIS', exp: 5, field: 'be'}
    ],
    tools: [
      {name: 'Git'},
      {name: 'Jira'},
      {name: 'Confluence'},
      {name: 'Jenkins'},
      {name: 'Docker'},
      {name: 'Notion'},
    ],
    languages: [
      {name: 'PHP', exp: 6},
      {name: 'JavaScript', exp: 8},
      {name: 'HTML', exp: 9},
      {name: 'CSS', exp: 8},
      {name: 'SASS', exp: 8},
    ],
    softSkills: [
      {name: 'Teamwork'},
      {name: 'Critical Thinking'},
      {name: 'Sustainability'},
    ],
  }),
  created() {
    this.yearsSinceStart = (new Date().getTime()-new Date(this.startDate).getTime())/1000/(60*60*24*365)
  }
}
</script>

<style lang="sass" scoped>

</style>
