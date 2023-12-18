<template>
    <div>
        <h1 class="text-center mt-3">Project Name</h1>
        <div class="d-flex flex-column p-4 gap-4 py-md-5 align-items-center justify-content-center">
            <VoteCard title="🧾 | Idea 1" />
            <VoteCard title="🧾 | Idea 2" />
            <VoteCard title="🧾 | Idea 3" />
            <div class="d-flex justify-content-between p-2 bottomBox">
                <ProposalCard linkName="ideaProposal" heading="Idea Proposal" desc="Any unique idea for the project click the button below."/>
                <chatBot />
            </div>
        </div>
    </div>
</template>

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