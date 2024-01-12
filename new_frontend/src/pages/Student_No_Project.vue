<template>
    <div class="container mt-4">
    <!-- Search Bar -->
    <div class="input-group mb-3"  v-if="$store.state.e.projects.length===0">
      <input type="text" class="form-control" placeholder="🔎 Search ...." aria-label="Search" aria-describedby="search-button" v-model="$store.state.e.query">
      <button class="btn btn-outline-success text-black" type="button" id="search-button" @click="$store.dispatch('e/getSearch')">Search</button>
    </div>
    <div v-if="$store.state.e.projects.length===0" >
      <li v-for="result in $store.state.e.searchResults" :key="result.id" class="list-unstyled">
        <ProjectCard :title = "`🧾 | ${result.project_topic}`" link_name="ideas" :pid="result.pk" class="my-4" />
      </li>      
    </div>

  
    <!--List of all Projects -->
    <h1 class="text-center" v-if="$store.state.e.projects.length!=0">PROJECTS</h1>
    <div v-for="project in getProjects" :key="project.pk">
      <ProjectCard :title="`🧾 | ${project.project_topic}`" link_name="ideas" :pid="project.pk"  class="my-4"/>
    </div>

    <!--Proposal Maker -->
    <div class="text-center" v-if="$store.state.e.projects.length===0">
      <router-link :to="{name:'proposalMaker'}" class="btn btn-outline-success text-black mt-3">Design your Proposal</router-link>
    </div>
    </div>

</template>

<script>
  import { mapGetters } from 'vuex';
  import ProjectCard from '@/components/ProjectCard.vue';
  // import ProposalCard from '../components/ProposalCard.vue'
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