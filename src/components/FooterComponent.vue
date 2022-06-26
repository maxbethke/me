<template>
  <v-container class="footer" fluid>
    <div class="footer__section">
      <v-btn
        text
        href="https://youtu.be/UF8uR6Z6KLc"
      >
        Stay hungry, stay foolish 🔥
      </v-btn>
    </div>
    <div class="footer__copyright"> 2022 Maximilian Bethke</div>
    <div class="footer__social-media">
      <v-btn icon href="https://www.linkedin.com/in/maximilian-bethke-8521a918b/">
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>
      <v-btn icon href="https://twitter.com/maxbethke_">
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
      <v-btn icon href="https://github.com/maxbethke">
        <v-icon>mdi-github</v-icon>
      </v-btn>
      <v-btn icon href="mailto://office@maxbethke.de">
        <v-icon>mdi-email</v-icon>
      </v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "FooterComponent",
}
</script>

<style lang="sass" scoped>
.footer
  display: flex
  align-items: center
  justify-content: space-evenly
  flex-wrap: wrap
  color: rgba(0, 0, 0, .54) !important
  &__copyright::before
    content: '\00A9'
</style>
