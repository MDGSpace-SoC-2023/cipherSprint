<template>
    <RouterView>
    <div>
        <h1 class="text-center mt-3">{{getCurProN}}</h1>
        <div class="d-flex flex-column p-4 gap-4 py-md-5 align-items-center justify-content-center">
            <VoteCard title="🧾 | Idea 1" action="VOTE" linkName="ideas"/>
            <VoteCard title="🧾 | Idea 2" action="VOTE" linkName="ideas"/>
            <VoteCard title="🧾 | Idea 3" action="VOTE" linkName="ideas"/>
            <div class="d-flex justify-content-between p-2 bottomBox">
                <ProposalCard linkName="ideaProposal" heading="Idea Proposal" desc="Any unique idea for the project click the button below."/>
                <chatBot />
            </div>
            <button  v-if="$store.state.a.user_info.is_prof===true" class="btn btn-dark"><RouterLink to="/resumelist" class="text-decoration-none text-white">View Resume Submitted</RouterLink></button>
        </div>
    </div>
    </RouterView>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('e', ['getCurProN']),
  },
};
</script>

<script setup>
 import VoteCard from "../components/VoteCard.vue"
 import ProposalCard from "@/components/ProposalCard.vue";
 import chatBot from "../components/chatBot.vue"
</script>

<style>
@media screen and (max-width: 500px){
.bottomBox{
    flex-direction: column;
}
}
</style>