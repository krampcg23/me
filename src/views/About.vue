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
        I architect and develop software solutions
      </div>
      <div>
      </div>
    </div>
    <div class="black-background vh-height">
      <div class="big-header max-height d-flex align-center">
        I architect and develop software solutions
      </div>
    </div>
    <div class="black-background">
      <div class="body-text d-flex flex-column align-center justify-center">
        <div class="justify-start">
          <div class="body-text-header">
            About
          </div>
          <div class="body-text-subheader">
            Hello! My name is Clay Kramp, and I am a software engineer reporting from the mountains of Colorado!
          </div>
          <div class="body-text-body">
            
          </div>
        </div>        
      </div>
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
}
.body-text {
  color: white;
  font-size: 2rem;
  max-width: 800px;
  margin: auto;
  width: 100%;
  font-family: 'Lato', sans-serif;
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
  font-size: 1rem;
  padding-top: 2rem;
  padding-bottom: 2rem; 
}
</style>