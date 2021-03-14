<template>
  <div>
    <div class="black-background vh-height">
      <div class="no-decoration">
        <router-link to="/">
          <v-btn icon>
            <v-icon class="icon-class">mdi-arrow-left</v-icon>
          </v-btn>
        </router-link>
      </div>
      <div class="big-header max-height d-flex align-center">
        Let's start a conversation!
      </div>
      <div>
      </div>
    </div>
    <div class="black-background">
      <div class="body-text d-flex flex-column align-center justify-center">
        <div class="justify-start">
          <div class="body-text-header">
            Contact
          </div>
          <div class="body-text-subheader">
            Feel free to reach out to me in any of the contact methods below! <br/><br/>
            <a href = "mailto: krampcg23@gmail.com">krampcg23 {at} gmail {dot} com</a><br/><br/>
            <a href="https://www.linkedin.com/in/claytonkramp/">LinkedIn</a>
          </div>
        </div>        
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Contact",

  data: () => ({})
});
</script>

<style scoped>
@keyframes slideIntoThoseDMs {
  0% {
    transform: translateY(20%);
  }
  100% {
    transform: translateY(0);
  }
}
.vh-height {
  height: 100vh;
}
.black-background {
  position: relative;
  background-color: black;
}
.max-height {
  height: 100%;
}
.no-decoration >>> a {
  text-decoration: none;
}
.icon-class {
  color: white !important;
  font-size: 3rem !important;
  padding-left: 2rem;
  padding-top: 2rem;
}
.big-header {
  font-size: 6rem;
  color: white;
  font-family: 'JetBrains Mono', monospace;
  padding-left: 5rem;
  animation: 0.3s ease-out 0s 1 slideIntoThoseDMs;
}
.body-text {
  color: white;
  font-size: 2rem;
  max-width: 800px;
  margin: auto;
  width: 100%;
  font-family: 'Lato', sans-serif;
  padding-bottom: 25rem;
}
.body-text-header {
  color: red;
  font-size: 3rem;
}
.body-text-subheader {
  padding-top: 2rem;
  padding-bottom: 2rem;
  font-size: 1.5rem;
}
.body-text-body {
  font-size: 1.25rem;
  padding-top: 2rem;
  padding-bottom: 15rem; 
}
a {
  color: red;
  text-decoration: none;
}
</style>