<template>
    <div class="card mt-3">
        <div class="card-body d-flex justify-content-between voteBox">
          <div class="p-2"><h5 ><router-link to="/" class="nav-link text-black">{{ title }}</router-link></h5></div> 
          <div class="p-2"><button class="btn btn-outline-success ">VOTE</button></div> 
        </div>
    </div>
</template>

<script>
export default {
  props:{
    title:String,
  }
}
</script>

<style scoped>
 .card{
     width:75%;
 }
 @media screen and (max-width: 400px){
  .voteBox{
    flex-direction: column;
  }
 }
</style>