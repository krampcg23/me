<template>
  <div class="purple-background">
    <div class="no-decoration">
      <router-link to="/">
        <v-btn icon>
          <v-icon class="white-text">mdi-arrow-left</v-icon>
        </v-btn>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Work",

  data: () => ({})
});
</script>

<style scoped>
.purple-background {
  position: relative;
  height: calc(100vh);
  background-image: linear-gradient(to top right, black, #22043D);
}
.max-height {
  height: 100%;
}
.no-decoration >>> a {
  text-decoration: none;
}
.white-text {
  color: white !important;
  font-size: 3rem !important;
  padding-left: 2rem;
  padding-top: 2rem;
}
</style>