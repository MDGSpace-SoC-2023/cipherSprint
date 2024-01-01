<template>
    <div class="card mt-3">
        <div class="card-body d-flex justify-content-between voteBox">
          <div class="p-2"><h5 >{{ title }}</h5></div> 
          <div class="p-2"><router-link :to="{name:linkName}" class="nav-link text-black"><button class="btn btn-outline-success ">{{ action }}</button></router-link></div> 
        </div>
    </div>
</template>

<script>
export default {
  props:{
    title:String,
    action:String,
    linkName:String,
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