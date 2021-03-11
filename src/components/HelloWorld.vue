<template>
  <div class="purple-background">
    <div class="hello">
      <v-icon class="gold">mdi-cat</v-icon>
      <br />WeLcOmE tO cHaKo'S wOrLd
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
.purple-background {
  position: relative;
  height: calc(100vh);
  background-image: linear-gradient(to top right, #1e1022, #612958);
}
.hello {
  position: absolute;
  top: 30vh;
  text-align: center;
  width: 100%;
  color: #b0974a;
  font-size: 2rem;
}
.gold {
  color: #b0974a;
}
</style>