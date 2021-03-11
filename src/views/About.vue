<template>
  <div class="blue-background">
    <div class="card-container">
      <v-card class="mx-auto" max-width="400">
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://media.newyorker.com/photos/5e06335ca15be900089fe632/1:1/w_1309,h_1309,c_limit/Brody-CatsReview.jpg"
        >
          <v-card-title></v-card-title>
        </v-img>
        <v-card-subtitle class="pb-0">I like cats</v-card-subtitle>
        <v-card-text class="text--primary">
          <div>Cats r da best</div>
        </v-card-text>
        <v-card-actions>
          <v-btn class="gold" text>Send me $</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HelloWorld",

  data: () => ({})
});
</script>

<style scoped>
.blue-background {
  position: relative;
  height: calc(100vh);
  background-image: linear-gradient(to top right, #0b1b67, #0a5848);
}
.card-container {
  position: absolute;
  top: 10vh;
  margin: auto;
  width: 100%;
}
.gold {
  color: #b0974a;
}
</style>