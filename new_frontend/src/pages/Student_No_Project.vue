<template>
    <div class="container mt-4">
    <!-- Search Bar -->
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="🔎 Search" aria-label="Search" aria-describedby="search-button">
      <button class="btn btn-outline-success text-black" type="button" id="search-button">Search</button>
    </div>
  
    <!--List of all Projects -->
    <h1 class="text-center">PROJECTS</h1>
    <ProjectCard title="🧾 | Project Name" link_name="home" />

    <!--Proposal Maker -->
    <ProposalCard linkName="proposalMaker" heading="Proposal Maker" desc="Interested to be a part of any project click the button below." />

   </div>
</template>

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