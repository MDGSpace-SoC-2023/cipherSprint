
<template>
    <div class="card container login-container col-md-4 loginBox" >
    <div class="row justify-content-center">
        <div class="col-md-10 login-form">
            <h2 class="text-center my-4">LOGIN</h2>
            <form @submit.prevent="$store.commit('a/submitForm')">
                <div class="form-group">
                    <input type="text" class="form-control" id="username" placeholder="👤 | Username" v-model="$store.state.a.username">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control mt-3" id="password" placeholder="🔒 | Password" v-model="$store.state.a.password">
                </div>
                <div class=" text-center">
                    <button type="submit" class="btn btn-outline-success my-3  mx-auto ">Login</button>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
  export default({
    name: 'LoginPage',
  })
</script>



<style scoped>
 .card{
    background-color:rgba(239, 237, 234, 0.852);
    
 }
 .form-control{
    background-color:rgb(80, 183, 158);
 }
 .loginBox{
    margin-top: 20vh;
 }
 @media screen and (max-width: 768px) {
    .card{
        width:max-content;
    }
 }
</style>
