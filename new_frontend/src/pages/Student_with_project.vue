<template>
  <RouterView>
    <div>
      <h1 class="text-center mt-3">{{ getCurProN }}</h1>
      <div class="d-flex flex-column p-4 gap-4 py-md-5 align-items-center justify-content-between" >
        <div v-for="(subArray,index) in ideaList"
        :key="index" class="container d-flex justify-content-center align-item-center" >
            <VoteCard :title="subArray[0]" action="VOTE" linkName="ideas"  @click="handleClick(subArray)" />
        </div>
        <div v-for="(subArray,index) in passedIdeaList"
        :key="index" class="container d-flex justify-content-center align-item-center">
            <VoteCard :title="subArray[0]" class="styleBox styleButton" action="Vote Passed"  />
        </div>
        <div v-for="(subArray,index) in rejectedIdeaList"
        :key="index" class="container d-flex justify-content-center align-item-center">
            <VoteCard :title="subArray[0]" class="styleBox2 styleButton" action="Vote Rejected"  />
        </div>
        <div
          class="d-flex justify-content-between p-2 bottomBox"
        >
          <ProposalCard
            linkName="ideaProposal"
            heading="Idea Proposal"
            desc="Any unique idea for the project click the button below."
          />
          <chatBot />
        </div>
        <button
          v-if="$store.state.a.user_info.is_prof === true"
          class="btn btn-dark"
        >
          <RouterLink to="/resumelist" class="text-decoration-none text-white"
            >View Resume Submitted</RouterLink
          >
        </button>
      </div>
    </div>
  </RouterView>
</template>

<script>
import { mapGetters } from "vuex";
// import store from "@/store/vuex";
export default {
  computed: {
    ...mapGetters("e",["getCurPro"]),
    ...mapGetters("e", ["getCurProN"]),
    ideaList(){
      return this.$store.state.c.idea_detail
    },
    passedIdeaList(){
      return this.$store.state.c.passIdeas
    },
    rejectedIdeaList(){
      return this.$store.state.c.rejectedIdeas
    }
  },
  async created() {
    const members = this.$store.state.e.cur_Selected.project_members;
    console.log("ideass");
    console.log(members);
    // for (let i = 0; i < members.length; i++) {
    //   if (members[i].username === this.$store.state.a.username)
    //     this.isMember = true;
    // }
    // console.log(this.isMember);
    //location.reload(true);
    console.log(this.ideaList);
    console.log('Heyy');
  },
  watch:{
    ideaList(newValue){
      console.log('New Ideas');
      console.log(newValue);
    },
    passedIdeaList(newVal){
      console.log('Passed Ideas',newVal);
    },
    rejectedIdeaList(newVall){
      console.log('Rejected ideas',newVall)
    }
  },
  data() {
    return {
      isMember: false,
    };
  },
  methods:{
    async handleClick(idea){
      console.log(idea);
      this.$store.commit('c/curSelected',idea);
      await this.$store.dispatch('c/Vote_on_Idea');
      const payload = this.$store.state.e.cur_Selected;
      this.$store.dispatch("c/getIdeas",payload);
      
    },
    // getIdeas(){
    //   this.$store.dispatch("c/getIdeas");
    // }
  }
};
</script>

<script setup>
import VoteCard from "../components/VoteCard.vue";
import ProposalCard from "@/components/ProposalCard.vue";
import chatBot from "../components/chatBot.vue";
</script>

<style>
  .styleBox{
    background-color: rgb(11, 122, 95);
    /* color:white; */
  }
  .styleBox2{
    background-color: rgb(180, 54, 54);
    
    /* color:white; */
  }
  .styleButton button{
    color:black;
    background-color: aliceblue;
  }
  .styleButton button:hover {
      /* Set the styles to override the default hover effect */
      background-color:aliceblue;
      color:black;
    }
@media screen and (max-width: 500px) {
  .bottomBox {
    flex-direction: column;
  }
}
</style>
