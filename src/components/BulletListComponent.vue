<template>
  <v-container
      class="list"
  >
    <div
        v-for="item in list"
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
  </v-container>
</template>

<script>
export default {
  name: 'BulletListComponent',
  props: {
    list: Array,
    color: {
      type: String,
      default: 'purple'
    }
  },
  data: () => ({
    fieldIcons: {
      be: 'mdi-server',
      fe: 'mdi-laptop',
      db: 'mdi-database',
      pkg: 'mdi-package-variant-closed'
    }
  })
}
</script>

<style lang="sass" scoped>
.list
  display: flex
  padding: 0
  flex-wrap: wrap
  .item
    position: relative
    display: flex
    justify-content: space-between

    font-weight: 500
    font-size: 0.8em
    color: white

    //background-color wil be set in template
    border-radius: 5px

    padding: 10px
    margin: 10px
    min-width: 150px
    overflow: hidden
    &__exp-bar
      position: absolute
      bottom: 0
      left: 0
      height: 10%
      background-color: cornflowerblue

</style>
