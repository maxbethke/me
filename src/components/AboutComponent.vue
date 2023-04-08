<template>
  <v-container class="about">
    <v-row>
      <v-col cols="12" sm="6">
        <v-card class="about__section">
          <v-card-title>About this site</v-card-title>
          <v-card-text>
            <p>This site should have given you some insight into my professional life.</p>
            <p>I organize my life in Notion and I love efficiency. That is why I build
              this site on top of Notion, so I would not have to maintain the
              same data at multiple places.</p>
            <p>To make this possible, I wrote a little API based on Express and wrapped around
              the Vue App you are looking at right now. The source code of both projects is
              publicly available on GitHub, so you can get an idea of what I do.</p>
            <v-list>
              <v-list-item href="https://github.com/maxbethke/me">
                <v-icon>mdi-github</v-icon> maxbethke/me
              </v-list-item>
              <v-list-item href="https://github.com/maxbethke/me-api">
                <v-icon>mdi-github</v-icon> maxbethke/me-api
              </v-list-item>
            </v-list>
            <p>
              The frontend you are seeing right now was served to you as a static site hosted on AWS S3 via CloudFront.
              The API that it calls to load its data is hosted serverless on AWS Lambda.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card class="about__section">
          <v-card-title>About me</v-card-title>
          <v-card-text>
            <p>I have been tinkering with websites since I was 13 and I am still amazed on how
              the internet turned our world inside out. Information is now key, and the gold
              of this new age is called data.</p>
            <p>When I am not developing software I either do research on resources that interest
              me - which include investment, finance and psychology - read books or meditate.</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AboutComponent",
}
</script>

<style lang="sass" scoped>
</style>
