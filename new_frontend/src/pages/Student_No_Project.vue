<template>
    <div class="container mt-4">
    <!-- Student with no project -->
    <div v-if="$store.state.e.projects.length===0" class="noProject">
      <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="🔎 Search" aria-label="Search" aria-describedby="search-button">
      <button class="btn btn-success text-black" type="button" id="search-button">Search</button>
    </div>
  
    <!--List of all Projects -->
    <h1 class="text-center">PROJECTS</h1>
    <div v-for="project in getProjects" :key="project.pk">
      <ProjectCard :title="`🧾 | ${project.project_topic}`" link_name="ideas" pid={{project.pk}} />
    </div>

    <!--Proposal Maker -->
    <div class="text-center">
      <router-link :to="{name:'proposalMaker'}" class="btn btn-outline-success text-black mt-3">Design your Proposal</router-link>
    </div>
    </div>
    
    <!-- Student/Faculty with atleast one project -->
    <div v-if="$store.state.e.projects.length!==0" class="container col-lg-10 mt-5" > 
        <h1 class="text-center mb-5">PROJECTS</h1>
        <ProjectCard title="Project Name" link_name="home" class="mb-3" />
        <ProjectCard title="Project Name" link_name="home" class="mb-3" />
        <ProjectCard title="Project Name" link_name="home" class="mb-3" />
        <ProjectCard title="Project Name" link_name="home" class="mb-3" />
    </div>

   </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default{
  computed: {
    ...mapGetters('e', ['getProjects']),
    ...mapGetters('a', ['getUser']),
  },
  created() {
    const uid = this.getUser.id;
    console.log(uid);
    this.$store.dispatch('e/get_pro',{uid});

  },
  components: {
    ProjectCard,
  },
  watch: {
  getProjects(newValue) {
    console.log('Projects updated:', newValue);
  },
},
}
</script>



<script>
  import ProjectCard from '@/components/ProjectCard.vue';
  import ProposalCard from '../components/ProposalCard.vue'
  
</script>

<style scoped>
  .card-header{
    background-color: rgb(80, 183, 158);
  }
  h1{
    color:rgb(80, 183, 158);
  }
  .shiftBottom{
    margin-top: 12vh;
  }
</style>