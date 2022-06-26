<template>
  <v-container class="experience">
    <p class="experience__paragraph">
      During my <b>{{ yearsSinceStart.toFixed(1) }}</b> years in the craft, I had the pleasure to work
      with many exciting technologies, such as
    </p>
    <div
      v-if="fields.length > 0"
    >
      <div
        v-for="group of fields"
        :key="group._id"
        class="group"
      >
        <div
            class="divider"
            @click="group.shown = !group.shown"
        >
          <div class="divider__caret">
            <v-icon v-if="group.shown">mdi-menu-down</v-icon>
            <v-icon v-else>mdi-menu-right</v-icon>
          </div>
          {{ group.name }}
          <div class="divider__line"></div>
        </div>
        <v-expand-transition>
          <BulletListComponent
              v-show="group.shown"
              class="list"
              :retriever="() => techstack.filter(item => item.field === group.name)"
          />
        </v-expand-transition>
      </div>
    </div>
    <p class="experience__paragraph">While working with those technologies, I was able to learn a lot about</p>
    <BulletListComponent class="list" :retriever="query" retrieverArgument="languages" color="slateblue"/>
    <p class="experience__paragraph">I have learned to love these tools, as I use them on a daily basis</p>
    <BulletListComponent class="list" :retriever="query" retrieverArgument="tools" color="darkgreen"/>
    <p class="experience__paragraph">Big projects are not completed alone. I thrive to work in teams that can do more than simply the sum of their
      members. Those are the softskills I bring</p>
    <BulletListComponent class="list" :retriever="query" retrieverArgument="softskills" color="gray"/>
  </v-container>
</template>

<script>
import BulletListComponent from '@/components/BulletListComponent'
import { queryNotion } from '@/services/ApiService'

export default {
  name: 'ExperienceComponent',
  components: { BulletListComponent },
  data: () => ({
    startDate: '2021-04-01',
    yearsSinceStart: 0,
    techstack: [],
    fields: []
  }),
  async created() {
    this.yearsSinceStart = (new Date().getTime()-new Date(this.startDate).getTime())/1000/(60*60*24*365)
    await this.queryTechstack()
    this.fields = [... new Set(this.techstack.map(item => item.field))]
        .map(uniqueField => ({name: uniqueField, shown: true}))
  },
  methods: {
    query(database) {
      return queryNotion(database)
    },
    async queryTechstack() {
      this.techstack = await this.query('techstack')
    }
  }
}
</script>

<style lang="sass" scoped>
.experience
  font-size: 1.4rem
  &__paragraph:not(:first-child)
    margin: 24px 0 12px
  .group + .group
    margin-top: 12px
  .divider
    display: flex
    align-items: center
    color: rgba(0, 0, 0, .5)
    font-size: .8em
    margin-bottom: 12px
    cursor: pointer
    &__line
      content: ' '
      margin-left: 6px
      border: 1px solid rgba(0, 0, 0, .5)
      flex-grow: 1
      height: max-content
  .list
    font-size: 1.2rem
</style>
