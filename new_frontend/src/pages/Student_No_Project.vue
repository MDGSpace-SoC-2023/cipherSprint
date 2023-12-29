<template>
    <div class="container mt-4">
    <!-- Search Bar -->
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="🔎 Search" aria-label="Search" aria-describedby="search-button">
      <button class="btn btn-outline-success text-black" type="button" id="search-button">Search</button>
    </div>
  
    <!--List of all Projects -->
    <h1 class="text-center">PROJECTS</h1>
    <div v-for="project in getProjects" :key="project.pk">
      <ProjectCard :title="`🧾 | ${project.project_topic}`" link_name="home" />
    </div>

    <!--Proposal Maker -->
    <ProposalCard linkName="proposalMaker" heading="Proposal Maker" desc="Interested to be a part of any project click the button below." />

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



<script setup>
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
</style>