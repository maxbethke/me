<template>
    <v-dialog
        v-model="isExpanded"
        class="project"
    >
      <template v-slot:activator="{ on }">
        <v-card
            class="project"
            elevation="6"
            v-bind="on"
            @click="openProject"
        >
          <v-container class="project__head">
            <v-card-title class="title">{{ project.name }}</v-card-title>
            <v-icon>mdi-arrow-expand</v-icon>
          </v-container>
          <v-container class="project__techstack">
            <BulletListComponent :retriever="() => project.techstack"/>
          </v-container>
          <v-container class="project__time">
            <span
                v-if="dates.from"
            ><b>From</b>: {{ dates.from }}</span>
            <span
                v-if="dates.until"
            ><b>Until</b>: {{ dates.until }}</span>
            <span
                v-else
            ><b>Ongoing</b></span>
          </v-container>
        </v-card>
      </template>

      <v-card
          class="project project--expanded"
      >
        <v-container class="project__head" fluid>
          <v-card-title class="title">{{ project.name }}</v-card-title>
        </v-container>
        <v-container class="project__techstack" fluid>
          <BulletListComponent :retriever="() => project.techstack"/>
        </v-container>
        <v-container class="project__time" fluid>
          <span
              v-if="dates.from"
          ><b>From</b>: {{ dates.from }}</span>
          <span
              v-if="dates.until"
          ><b>Until</b>: {{ dates.until }}</span>
          <span
              v-else
          ><b>Ongoing</b></span>
        </v-container>
        <v-divider></v-divider>
        <v-container>
          <div
            v-for="block in project.contentBlocks"
            :key="block._id"
            :class="`block--${block.type}`"
          >
            <div
                v-for="innerBlock in block.content"
                :key="innerBlock._id"
                :class="`block--${innerBlock.type}`"
            >
              {{ innerBlock.plain_text}}
            </div>
          </div>
        </v-container>
      </v-card>
  </v-dialog>
</template>

<script>
import BulletListComponent from '@/components/BulletListComponent'

export default {
  name: "ProjectComponent",
  components: {
    BulletListComponent
  },
  props: {
    project: Object
  },
  data: () => ({
    isExpanded: false,
    dates: {},
    months: ["January","February","March","April","May","June","July","August","September","October","November","December"]
  }),
  watch: {
    project() {
      this.formatDates()
    }
  },
  created() {
    this.formatDates()
  },
  methods: {
    formatDates() {
      const dateFields = ['from', 'until']
      for (const field of dateFields) {
        if(Object.prototype.hasOwnProperty.call(this.project, field) && this.project[field]) {
          const date = new Date(this.project[field])
          this.dates[field] = `${this.months[date.getMonth()]} ${date.getFullYear()}`
        }
      }
    },
    openProject() {
      this.isExpanded = true
    },
    closeProject() {
      this.isExpanded = false
    }
  }
}
</script>

<style lang="sass" scoped>
.project
  min-width: 300px
  &__head
    display: flex
    justify-content: space-between
    background-color: rgba(0, 0, 0, 0.15)
    .title
      display: inline-block
      padding: 0
  &__techstack
    padding-bottom: 0
  &__time
    display: flex
    justify-content: space-between
    flex-wrap: wrap
  &--expanded
    .project__time
      justify-content: start
      span
        margin-right: 1em
  .block
    &--heading_1
      font-size: 1.5em
      &:not(:first-child)
        margin-top: 1em
    &--bulleted_list_item
      display: flex
      flex-wrap: nowrap
      margin: 0
      &::before
        content: '\2022'
        margin: 0 1em
    &--text
      display: inline-block
    &--quote
      background-color: rgba(0, 0, 0, 0.1)
      border-left: 3px solid black
      padding: 10px
    &--paragraph
      margin: 10px 0
</style>