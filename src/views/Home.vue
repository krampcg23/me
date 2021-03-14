<template>
  <div class="home">
    <HelloWorld class="home-display"/>
    <div class="no-mobile">
      Gah! Sorry, I'm not mobile friendly yet! Come see me on your desktop!
    </div>
  </div>

</template>

<script lang="ts">
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>

<style scoped>
  .home {
    height: 100%
  }
  @media (max-width:1024px) {
    .home-display {
      display: none;
    }
  }
  .no-mobile {
    display: none;
  }
  @media (max-width:1024px) {
    .no-mobile {
      display: block;
      background: black;
      color: red;
      height: 100%;
      font-family: 'JetBrains Mono', monospace;
      font-size: 2rem;
    }
  }
</style>
