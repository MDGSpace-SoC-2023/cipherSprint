<template>
  <div class="container mt-4 col-lg-6">
    <div v-if="(isPopupVisible)&&(this.$store.state.c.error_message.length!==0)" class="popup">
      <div class="popup-content">
        <p class="errorBox">Error : {{ this.$store.state.c.error_message}}</p>
        <button class="btn btn-outline-danger" @click="closePopup">Close</button>
      </div>
    </div>
    <h1 class="text-center mb-5">Proposal</h1>
    <!-- Card with Form -->
    <div class="card">
      <div class="card-body">
        <h5 class="card-title text-center">Idea</h5>

        <!-- Form -->
        <form
          class="d-flex flex-wrap justify-content-between"
          @submit.prevent="submitProposal"
        >
          <Form_Input
            Id="project"
            title="Project Name"
            v-model="$store.state.e.cur_Selected.project_topic"
            class="p-2"
          />
          <Form_Input
            Id="problem"
            title="Problem Faced"
            v-model="$store.state.c.problem"
            class="p-2"
          />
          <Form_Input
            Id="idea"
            title="Idea"
            v-model="$store.state.c.idea"
            class="p-2"
          />
          <Form_Input
            Id="amount"
            title="Amount Required"
            v-model="$store.state.c.amount"
            class="p-2"
          />
          <button class="btn btn-dark text-white text-right" type="submit">
            Submit Idea
          </button>
        </form>
        <!-- End Form -->
      </div>
    </div>
    <!-- End Card with Form -->
  </div>
</template>

<script>
import Form_Input from "../components/Form_Input.vue";
export default {
  name: "Card_Form",
  components: { Form_Input },
  data(){
    return{
      isPopupVisible:false,
    }
  },
  methods: {
    submitProposal() {
      this.$store.dispatch("c/Submit_Idea");
      console.log(this.$store.state.c.error_message);
      console.log('message detected');
      if(this.$store.state.c.error_message.length===0){
        console.log('hiiii')
        this.$router.replace('/project')
        
      }
      else{
        console.log('yessss')
        this.isPopupVisible=true;
      }
    },
    closePopup(){
      this.isPopupVisible=false;
      this.$store.state.c.error_message="";
    },
  },
};
</script>

<style scoped>
.card-body {
  background-color: rgb(23, 66, 97);
  color: white;
}
.errorBox{
  color:red;

}
</style>
