<template>
  <v-app>
    <v-app-bar app dense dark class="no-decoration">
      <v-spacer></v-spacer>
      <router-link to="/">
        <v-btn icon>
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </router-link>
      <router-link to="/about">
        <v-btn icon>
          <v-icon>mdi-skull-outline</v-icon>
        </v-btn>
      </router-link>
    </v-app-bar>
    <v-content class="remove-padding">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
  data: () => ({
    //
  })
});
</script>

<style scoped>
#app {
  font-family: "Playfair Display", serif;
}
.no-decoration >>> a {
  text-decoration: none;
}
.remove-padding >>> .container {
  padding: 0;
}
</style>
