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
      <div class="black-background work-items">
        <WorkItem
          workplace="Maxar"
          title="Software Engineer"
          dates="May 2021 - Present"
          description="
          - Software Engineer on the Maxar Data Services Team <br /><br/>
          - Developing Usage and Metering for SecureWatch, an on-demand software to the world's most recent <br/>high-accuracy, high-resolution satellite imagery and analytics<br/><br/>
          - Lead Front-End engineer in Scrum Team <br /><br/>"
          link="https://www.maxar.com/"
          linkTitle="Maxar.com"
        ></WorkItem>
        <WorkItem
          workplace="Nexla"
          title="Solutions Engineer"
          dates="Feb 2021 - Apr 2021"
          description="
          - Architect, develop, and manage DataOps for several client companies<br /><br/>
          - Using the Nexla platform to solve client’s data problems using our unique data mesh solution<br/><br/>"
          link="https://www.nexla.com/"
          linkTitle="Nexla.com"
        ></WorkItem>
        <WorkItem
          workplace="Credera"
          title="Open Technology Solutions Consultant"
          dates="July 2019 - Feb 2021"
          description="
          - Lead Front End Developer at a health services company to rebrand an array of web applications<br/><br/>
          - Developed a machine-learning driven decisioning service for the largest home service company to target out-of-network<br/>professionals with the right offers at the right time. Also the primary API designer on this project.<br/><br/>
          - Lead Front End Developer on a project to create a new line of product for a home service company and developed <br/>many re-usable components to be used by the entire organization. <br/><br/>
          - Modernized an outdated, revenue-generating web application by transforming the code base using a Vue.js application <br/>for the largest digital marketplace in the home service industry, estimated at a $6M annualized gain.<br/><br/>
          - Modernized a major transportation company’s payment and accounting web application by using Angular with TypeScript,<br/> containerizing with Docker, orchestrating with Kubernetes, and creating CI/CD pipelines to help manage their $4B business.<br/><br/>"
          link="https://credera.com/"
          linkTitle="Credera.com"
        ></WorkItem>
        <WorkItem
          workplace="CSM"
          title="Adjunct Instructor"
          dates="Aug 2018 - May 2019"
          description="
            - Instructor of 2 lecture sections and 3 lab sections of CSCI 262 Data Structures<br/><br/>
            - Worked with over 200 students to benefit student learning<br/><br/>
            - Designed labs and projects to reflect the content of the course<br/><br/>
            - Worked with a staff of TAs to help manage grading, office hours, and general student learning<br/><br/>"
          link="https://www.ratemyprofessors.com/ShowRatings.jsp?tid=2482239"
          linkTitle="Check me out on Rate My Professor"
        ></WorkItem>
        <WorkItem
          workplace="ViaSat"
          title="Software Engineering Intern"
          dates="May 2017 - Aug 2017"
          description="
            - Developed software to monitor the video streaming experience in the entire Exede network<br/><br/>
            - Visualized useful metrics via Grafana<br/><br/>
            - Developed a web application to work in tandem with Grafana visuals<br/><br/>
            - Queried from multiple databases (MariaDB, ImpalaDB, SQLite)<br/><br/>
            - Learned new technologies including: Docker, Python Pyramid, Jinja2, Kafka<br/><br/>
            - Worked in an agile environment<br/><br/>
            - Monitoring category champion at ViaSat Intern Hackathon (1 of 30 teams)<br/><br/>"
          link="https://www.viasat.com/"
          linkTitle="ViaSat.com"
        ></WorkItem>
        <div class="d-flex flex-row justify-start">
          <Things
            title="Things I love"
            description="
              - Vue (and React with a close 2nd)<br/>
              - TypeScript<br/>
              - Lombok<br/>
              - Python<br/>
              - Data Operations (and how to do it better)<br/>
              - Collaborative Agile Teams<br/>
              - Test Driven Development<br/>
              - Holistic Software Development (no silos!)<br/>
              - Linters<br/>
              - Microservices
            "
          >
          </Things>
          <Things
            title="Things I hate"
            description="
              - 'Trust in God, Test in Prod'<br/>
              - Monolith Architecture<br/>
              - Thinking that more devs == faster development<br/>
              - 'We'll figure out the UI/UX later'<br/>
              - Lack of documentation / comments in code<br/>
              - Spaghetti (Code)<br/>
              - Cheese (the food)
            "
          >
          </Things>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import WorkItem from "../components/WorkItem.vue";
import Things from "../components/Things.vue";
export default Vue.extend({
  name: "Work",
  components: {
    WorkItem,
    Things
  },
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
.work-items {
  margin-top: 3rem;
  padding-left: 10rem;
  padding-bottom: 5rem;
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
  font-family: "JetBrains Mono", monospace;
  padding-left: 5rem;
}
.body-text {
  color: white;
  font-size: 2rem;
  max-width: 800px;
  margin: auto;
  width: 100%;
  font-family: "Lato", sans-serif;
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
