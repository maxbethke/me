<template>
  <v-container class="pa-0" fluid>
    <div class="list" v-if="items.length > 0">
      <div
          v-for="item in items"
          :key="item._id"
          class="item"
          :style="{
          backgroundColor: color
        }"
      >
        {{ item.name }}
        <div
            v-if="item.exp"
            class="item__exp-bar"
            :style="{width: item.exp*10+'%'}"
        ></div>
        <v-icon
            v-if="item.field"
            class="exp-bar__icon"
        >
          {{ fieldIcons[item.field] }}
        </v-icon>
      </div>
    </div>
    <v-alert v-if="items.length < 1 &&! isLoading &&! loadingError" type="info">
      This list is empty
    </v-alert>
    <v-alert v-if="isLoading" type="info">
      Loading list...
    </v-alert>
    <v-alert v-if="loadingError" type="error">
      There was an error loading this list.
    </v-alert>
  </v-container>
</template>

<script>
export default {
  name: 'BulletListComponent',
  props: {
    retriever: Function,
    retrieverArgument: String,
    color: {
      type: String,
      default: 'purple'
    }
  },
  data: () => ({
    fieldIcons: {
      Backend: 'mdi-server',
      Frontend: 'mdi-laptop',
      Database: 'mdi-database',
      "Package Manager": 'mdi-package-variant-closed'
    },
    items: [],
    isLoading: true,
    loadingError: false
  }),
  async created() {
    try {
      this.items = await this.retriever(this.retrieverArgument)
    } catch (e) {
      this.loadingError = true
    } finally {
      this.isLoading = false
    }
  }
}
</script>

<style lang="sass" scoped>
.list
  display: flex
  margin: -0.5em
  flex-wrap: wrap
  .item
    position: relative
    display: flex
    justify-content: space-between
    align-items: center

    font-weight: 500
    font-size: 0.8em
    color: white

    //background-color wil be set in template
    border-radius: 5px

    padding: 10px
    margin: 0.5em
    min-width: 10em
    overflow: hidden
    &__exp-bar
      position: absolute
      bottom: 0
      left: 0
      height: 10%
      background-color: cornflowerblue

</style>
