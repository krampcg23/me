<template>
  <div class="work-item on-hover" @click="() => open = !open">
      <div class="work-item-workplace">
        {{workplace}}  
      </div>
      <div class="work-item-title">
        {{title}}  
      </div>
      <div>
        <i>{{dates}}</i>
      </div>
      <div class="work-item-description" :class="open && 'work-item-description--open'">
        <div class="work-item-description--content">
          <div v-html="description">
          </div>
          <a class="work-item-link" :href="link" target="_blank">{{linkTitle}}</a>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "WorkItem",
  props: {
      workplace: String,
      title: String,
      dates: String,
      description: String,
      link: String,
      linkTitle: String
  },
  data: function() {
    return {
      open: false
    }
  }
});
</script>

<style scoped>
.work-item {
  color: white;
  font-family: 'Lato', sans-serif;
  cursor: pointer;
  padding-bottom: 6rem;
}
.work-item-workplace {
  font-family: 'JetBrains Mono', monospace;
  font-size: 8rem;
  line-height: 1em;
}
.work-item-title {
  color: red;
  font-size: 3rem;
}
.work-item-description {
  font-size: 1.25rem;
  transition: all 0.6s ease;
  overflow: hidden;
  max-height: 0px;
}
.work-item-description--content {
  border-left: 2px dotted;
  padding-left: 5rem;
  padding-top: 2rem;
  margin-top: 2rem;
  padding-bottom: 2rem;
}
.work-item-description--open {
  max-height: 30em;
}
.on-hover {
  transition: transform .3s ease-out;
  cursor: pointer;
}
.on-hover:hover {
  transform: translate(100px, 0px);
}
.work-item-link {
  color: red;
  cursor: pointer;
}
</style>