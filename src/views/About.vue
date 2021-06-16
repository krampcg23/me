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
            I have wide interests in web applications, data operations, UI/UX, and machine learning, and have experiences to prove them, too! My journey to become a software engineer
            began with a degree in Applied Mathematics which opened my eyes to applying mathematical concepts to solve complex business problems. I am also passionate about high-performance 
            computing, combined with efficient and elegant code to solve day-to-day software problems.
            <br /> <br /> <br />
            My personality type is an <a href="https://www.16personalities.com/enfj-personality">ENFJ</a> and some of my core values about work are:
            <br /> <br />
            <ul>
              <li><i>Meaningful Work</i>: &nbsp;&nbsp;It's important to me that the work I do is meaningful, and helps advance society (even if it's marginal). I am not 
              interested in developing a one-click button to order a burger from McDonald's, but strongly invested in solving complex issues to support initiatives like the 
              environment, hunger, or safety using my technical skills.<br/><br/></li>
              <li><i>Culture</i>: &nbsp;&nbsp;Work culture is <i>critical</i> to have a succesful company. Knowing your co-workers 
              strengths and weaknesses, establishing a bond, and caring about their lives lead to better work relationships, higher collaboration, and overall more sustainable and safer code. 
              It's a simple win-win to improve both work and life.<br/><br/></li>
              <li><i>Professional Development</i>: &nbsp;&nbsp;I care deeply about professional development outside of work. In my own experience, getting certifications or taking courses
              outside of work has helped me learn what I enjoy and what I don't enjoy (which are equally important). I believe it has made me a more well-rounded engineer, and helped
              me become a better mentor as well.</li>
            </ul>
            <br/> <br/>
            While a graduate student, I worked as an Adjunct Instructor helping to teach a course in Computer Science. This has also led to a life-long interest in teaching and mentorship.
            I have had the privilege of having phenomenal mentors in my life, and I find it necessary to return that favor to the next set of mentees.
            <br/> <br/>
            You can read more about my experiences from my resume below:
            <br/> <br/>
            <a href="https://www.dropbox.com/s/csg8x7t0z5geh9i/Clay%20Kramp%20Resume.pdf?dl=0" target="_blank">Clay Kramp's Resume 6/16/2021</a>
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
}
</style>