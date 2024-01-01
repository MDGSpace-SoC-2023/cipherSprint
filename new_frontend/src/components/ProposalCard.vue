<template>
    <div class="card mx-3">
    <h5 class="card-header">{{ heading }}</h5>
    <div class="card-body">
      <p class="card-text">{{ desc }}</p>
      <router-link :to="{name:linkName}" class="btn btn-outline-success text-black">Design your Proposal</router-link>
    </div>   
</div>
</template>

<script>
  export default{
    name:'ProposalCard',
    props:{
      linkName:String,
      heading:String,
      desc:String,
    }
  }
</script>

<style >
  .card-header{
    background-color: rgb(80, 183, 158);
  }
</style>