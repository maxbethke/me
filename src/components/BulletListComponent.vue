<template>
  <v-container class="pa-0" fluid>
    <div class="bullet-list" v-if="items.length > 0">
      <div
          v-for="item in items"
          :key="item._id"
          :class="`item${item.exp ? '--fixed-width' : ''}`"
          :style="{
            backgroundColor: color,
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
            class="item__icon"
        >
          {{ fieldIcons[item.field] }}
        </v-icon>
      </div>
    </div>
    <v-alert v-if="items.length < 1 &&! isLoading &&! loadingError" type="info">
      This list is empty
    </v-alert>
    <v-progress-circular
        v-if="isLoading"
        indeterminate
        color="primary"
    ></v-progress-circular>
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
    },
    sort: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    fieldIcons: {
      Backend: 'mdi-server',
      Frontend: 'mdi-laptop',
      Database: 'mdi-database',
      "Package Manager": 'mdi-package-variant-closed',
      "eCommerce Framework": 'mdi-cart',
    },
    items: [],
    isLoading: true,
    loadingError: false
  }),
  async created() {
    try {
      this.items = await this.retriever(this.retrieverArgument)
      if(this.sort) {
        this.items.sort((a, b) => {
          if(a.exp > b.exp) return -1
          return 0
        })
      }
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

.bullet-list
  display: flex
  flex-wrap: wrap
  margin: -6px !important
  .item
    position: relative
    display: flex
    justify-content: space-between
    align-items: center

    font-weight: 500
    color: white

    //background-color wil be set in template
    border-radius: 5px

    margin: 6px
    padding: 12px
    overflow: hidden

    box-shadow: 3px 5px 10px rgb(0 0 0 / 20%)
    &__icon
      margin-left: 12px
    &__exp-bar
      position: absolute
      bottom: 0
      left: 0
      height: 10%
      background-color: cornflowerblue
    &--fixed-width
      @extend .item
      min-width: 10em

@media #{map-get($display-breakpoints, 'xs-only')}
  .item--fixed-width
    width: 100%
</style>
