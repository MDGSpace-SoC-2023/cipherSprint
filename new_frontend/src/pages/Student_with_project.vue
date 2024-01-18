<template>
  <RouterView>
    <div>
      <h1 class="text-center mt-3">{{ getCurProN }}</h1>
      <div
        class="d-flex flex-column p-4 gap-4 py-md-5 align-items-center justify-content-center"

      >
        <div v-for="(subArray,index) in ideaList"
        :key="index" class="container">
            <VoteCard :title="subArray[0]" action="VOTE" linkName="ideas"  @click="handleClick(subArray)" />
        </div>
        <div
          class="d-flex justify-content-between p-2 bottomBox"
          v-if="isMember"
        >
          <ProposalCard
            linkName="ideaProposal"
            heading="Idea Proposal"
            desc="Any unique idea for the project click the button below."
          />
          <chatBot />
        </div>
        <button
          v-if="$store.state.a.user_info.is_prof === true && isMember"
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
    ...mapGetters("e", ["getCurProN"]),
    ideaList(){
      return this.$store.state.c.idea_detail
    }
  },
  created() {
    const members = this.$store.state.e.cur_Selected.project_members;
    this.$store.dispatch("c/getIdeas");
    console.log("ideass");
    console.log(members);
    for (let i = 0; i < members.length; i++) {
      if (members[i].username === this.$store.state.a.username)
        this.isMember = true;
    }
    console.log(this.isMember);
  },
  data() {
    return {
      isMember: false,
    };
  },
  methods:{
    handleClick(idea){
      console.log(idea);
      this.$store.commit('c/curSelected',idea);
      this.$store.dispatch('c/Vote_on_Idea');
    }
  }
};
</script>

<script setup>
import VoteCard from "../components/VoteCard.vue";
import ProposalCard from "@/components/ProposalCard.vue";
import chatBot from "../components/chatBot.vue";
</script>

<style>
@media screen and (max-width: 500px) {
  .bottomBox {
    flex-direction: column;
  }
}
</style>
