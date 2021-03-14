<template>
  <div class="things">
    <div class="things-title">
      {{title}}
    </div>
    <div class="things-description" v-html="description">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Things",
  props: {
      title: String,
      description: String
  }
});
</script>

<style scoped>
.things {
  padding-top: 4rem;
  margin-right: 15rem;
}
.things-title {
  color: red;
  font-family: 'JetBrains Mono', monospace;
  font-size: 2rem;
}
.things-description {
  color: white;
  font-size: 1.25rem;
}
</style>