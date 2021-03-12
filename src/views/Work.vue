<template>
  <div class="purple-background">
    <div class="no-decoration">
      <router-link to="/">
        <v-btn icon>
          <v-icon class="white-text">mdi-arrow-left</v-icon>
        </v-btn>
      </router-link>
    </div>
    <div class="flex-column align-center max-height">
        <div class="mx-auto white-text">
            Work Experiences
        </div>
        <v-card class="mb-12 mx-auto" width="600">
                <v-img
                class="white--text align-end"
                height="100px"
                src="../assets/nexla.png"
                >
            </v-img>
            <v-card-title>Solutions Engineer</v-card-title>
            <v-card-subtitle class="pb-0">Nexla, Feb 2021 - Present</v-card-subtitle>
            <v-card-text class="text--primary">
            Architect, develop, and manage #DataOps for several client companies using the Nexla platform to solve client’s data problems using our unique data mesh solution.
            </v-card-text>
        </v-card> 
        <v-card class="mb-12" width="600">
            <v-img
                class="white--text align-end"
                height="100px"
                src="../assets/credera.png"
                >
            </v-img>
            <v-card-title>Software Engineering Consultant</v-card-title>
            <v-card-subtitle class="pb-0">Credera, July 2019 - Feb 2021</v-card-subtitle>
            <v-card-text class="text--primary">
                Lead Front End Developer on a project to create a new line of product for a home service company and developed many re-usable components to be used by the entire organization. <br /> <br />
                Modernized an outdated, revenue-generating web application by transforming the code base using a Vue.js application for the largest digital marketplace in the home service industry, estimated at a $6M annualized gain. <br/> <br/>
                Modernized a major transportation company’s payment and accounting web application by using Angular with TypeScript, containerizing with Docker, orchestrating with Kubernetes, and creating CI/CD pipelines to help manage their $4B business.<br/>
            </v-card-text>
        </v-card> 
        <v-card class="mb-12" width="600">
            <v-card-title>Adjunct Professor</v-card-title>
            <v-card-subtitle class="pb-0">Colorado School of Mines</v-card-subtitle>
            <v-card-text class="text--primary">
            Architect, develop, and manage #DataOps for several client companies using the Nexla platform to solve client’s data problems using our unique data mesh solution
            </v-card-text>
        </v-card> 
        <v-card class="mb-12" width="600">
            <v-card-title>Software Engineering Intern</v-card-title>
            <v-card-subtitle class="pb-0">Nexla</v-card-subtitle>
            <v-card-text class="text--primary">
            Architect, develop, and manage #DataOps for several client companies using the Nexla platform to solve client’s data problems using our unique data mesh solution
            </v-card-text>
        </v-card> 
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