<template>
    <div class="card mt-3 mx-3">
    <h5 class="card-header">Hey there if you need any help I'm always there</h5>
    <div class="card-body">
      <RouterLink to="/message"><input type="text" placeholder="Enter a message ..." class="form-control"></RouterLink>
    </div>   
</div>
</template>

<script>
  export default{
    name:'ProposalCard',
    props:{
      linkName:String
    }
  }
</script>