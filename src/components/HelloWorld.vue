<template>
  <div class="purple-background">
    <div class="header">
      <div class="white-text on-hover hover-hello"><span></span></div>
      <div class="white-text on-hover hover-iam"><span></span></div>
      <div class="red-text on-hover hover-clay"><span></span></div>
    </div>
    <div class="sub-header">
      ...and it is very nice to meet you!
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
  background-color: black;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.header {
  padding-left: 10rem;
  font-size: 10rem;
  width: 50%
}
.sub-header {
  font-family: 'Courgette', cursive;
  font-size: 2rem;
  color: white;
}
.on-hover {
  display: inline-block;
  transition: transform .3s ease-out;
  cursor: pointer;
}
.on-hover:hover {
  transform: translate(100px, 0px);
}
.hover-hello span:after {
  content: "Hello";
}
.hover-hello:hover span:after {
  content: "Work  ";
}
.hover-iam span:after {
  content: "I am  ";
}
.hover-iam:hover span:after {
  content: "About";
}
.hover-clay span:after {
  content: "Clay ";
}
.hover-clay:hover span:after {
  content: "Contact";
}
.red-text {
  color: red;
  font-family: 'JetBrains Mono', monospace;;
}
.white-text {
  color: white;
  font-family: 'JetBrains Mono', monospace;;
}

@media (max-width:1024px) {
  .header {
    padding-left: 5rem;
    font-size: 7rem;
  }
  .sub-header {
    padding-left: 2rem;
    padding-right: 5rem;
    font-size: 2rem;
  }
}

@media (max-width:500px) {
  .purple-background {
    flex-direction: column;
  }
  .header {
    padding-left: 2rem;
    font-size: 5rem;
    width: 100%;
  }
  .sub-header {
    padding-left: 2rem;
    font-size: 2rem;
  }
}
</style>