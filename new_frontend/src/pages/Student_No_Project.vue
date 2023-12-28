<template>
    <div class="container mt-4">
    <!-- Student with no project -->
    <div v-if="$store.state.e.projects.length===0" class="noProject">
      <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="🔎 Search" aria-label="Search" aria-describedby="search-button">
      <button class="btn btn-success text-black" type="button" id="search-button">Search</button>
    </div>

    <div class="container shiftBottom col-9">
    <ProjectCard
      v-for="(componentName, index) in paginatedComponents"
      :key="index"
      :title="componentName"
      link_name="home" class="mb-3"
    />
    <div class="modifyPaginate mt-3">
    <paginate
      :page-count="totalPages"
      :click-handler="goToPage"
      :prev-text="'Previous'"
      :next-text="'Next'"
      :container-class="'pagination'"
    ></paginate></div>
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
  import ProjectCard from '@/components/ProjectCard.vue';
  import Paginate from "vuejs-paginate-next";
  export default{
  name:'ProposalPage',
  components:{
    ProjectCard ,
    paginate:Paginate,
  },
  data() {
    return {
      componentList:['Project 1','Project 2','Project 3','Project 4','Project 5','Project 6'],
      itemsPerPage: 4, 
      currentPage: 1,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.componentList.length / this.itemsPerPage);
    },
    paginatedComponents() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.componentList.slice(startIndex, endIndex);
    },
  },
  methods: {
    goToPage(pageNumber) {
      this.currentPage = pageNumber;
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