<template>
  <v-container class="header" fluid>
    <div class="intro">
      <div class="intro__head">
        <p class="intro--standout"><b>Hi</b>, my name is</p>
        <h1 class="intro--name">Maximilian Bethke</h1>
      </div>
      <p>and I do</p>
      <p class="intro--standout">Software-Development</p>
    </div>
  </v-container>
</template>
<script>
export default {
  name: 'HeaderComponent',
}
</script>
<style lang="sass">
.header
  margin-top: 30px
  .intro
    .intro__head
      margin-bottom: 1em
    &--standout
      font-size: 1.5em
    &--name
      font-size: 3em
    p
      margin: 0 !important
</style>
