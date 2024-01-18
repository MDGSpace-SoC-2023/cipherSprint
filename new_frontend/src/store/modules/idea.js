import { ethers } from "ethers";
// const { stringify } = require("json-bigint");
// import BigInt from 'big-integer';

import {
  proposal_abi,
  proposalContractAddress,
  voteContractAddress,
  vote_abi,
} from "../../../constants.js";
const idea_module = {
  namespaced: true,
  state: {
    project: "",
    problem: "",
    idea: "",
    amount: 0,
    idea_detail: [],
    cur_SelectedIdea: [],
  },
  mutations: {
    submitInfo(state) {
      console.log(state.idea);
    },
    setIdeas(state, data) {
      const newArray = Object.values(data).map((item) => {
        const integerValue = Number(item[2]);

        return {
          ...item,
          2: Number.isSafeInteger(integerValue) ? integerValue : item[2],
        };
      });
      state.idea_detail = newArray;
    },
    curSelected(state, idea) {
      state.cur_SelectedIdea = idea;
    },
  },
  actions: {
    async Submit_Idea({ state, rootState }) {
      console.log("Hi");
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545/");
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(
          proposalContractAddress,
          proposal_abi,
          signer
        );
        // const contract2 = new ethers.Contract(
        //   proposalContractAddress,
        //   proposal_abi,
        //   provider
        // );
        contract.on("*", (event) => {
          //console.log(message);
          console.log(event.log);
        });
        try {
          console.log(rootState.e.cur_Selected.pk);
          console.log(state.project);
          console.log(state.idea);
          console.log(state.problem);
          console.log(state.amount);
          console.log(accounts[0]);
          console.log(contract.add_proposal);
          const proposalTransaction = await contract.add_proposal(
            rootState.e.cur_Selected.pk,
            state.project,
            state.idea,
            state.problem,
            state.amount,
            accounts[0],
            {
              gasLimit: 8000000,
              gasPrice: ethers.parseUnits("30", "gwei"),
            }
          );
          await proposalTransaction.wait();
          console.log(proposalTransaction);
          console.log("Transaction mined");
          console.log(rootState.e.cur_Selected.pk);
          const projectProposals = await contract.getProjectProposal.staticCall(
            1
          );
          // await projectProposals.wait();
          if (projectProposals.length > 0) {
            console.log(projectProposals);
            console.log("Horjgnjerg");
          } else {
            console.log("No proposals found for the specified project.");
          }
        } catch (error) {
          console.log(error);
        }
      }
      //this.$router.replace('/project');
    },
    async Vote_on_Idea({ state, rootState }) {
      console.log("starting voting");
      console.log(state.cur_SelectedIdea[0]);
      if (window.ethereum) {
        // const accounts = await window.ethereum.request({
        //   method: "eth_requestAccounts",
        // });
        const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545/");
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(
          voteContractAddress,
          vote_abi,
          signer
        );
        const contract1 = new ethers.Contract(
          proposalContractAddress,
          proposal_abi,
          signer
        );
        const check1 = await contract.getvoted.staticCall(
          rootState.e.cur_Selected.pk,
          rootState.a.user_info.id,
          state.cur_SelectedIdea[0]
        );
        console.log(check1);
        console.log("voting started");
        console.log(rootState.e.cur_Selected.project_members.length);
        if (!check1) {
          const voteTx = await contract.voting(
            rootState.e.cur_Selected.pk,
            rootState.a.user_info.id,
            state.cur_SelectedIdea[0]
          );
          await voteTx.wait();
          console.log(voteTx);
          console.log("Transaction mined");
        }
        const check2 = await contract.getvoted.staticCall(
          rootState.e.cur_Selected.pk,
          rootState.a.user_info.id,
          state.cur_SelectedIdea[0]
        );
        console.log(check2);
        const ideavotes = await contract.getnumvotes.staticCall(
          rootState.e.cur_Selected.pk,
          state.cur_SelectedIdea[0]
        );
        console.log(ideavotes);

        if (
          Number(ideavotes) >= rootState.e.cur_Selected.project_members.length
        ) {
          console.log("idea passed!!!");
          var ideaidis = -1;
          const gotidea = await contract1.getIdea.staticCall(
            rootState.e.cur_Selected.pk
          );
          console.log(gotidea);
          for (let i = 0; i < gotidea.length; i++) {
            if (gotidea[i].idea == state.cur_SelectedIdea[0]) {
              ideaidis = gotidea[i].ideaid;
              break;
            }
          }
          const removeproposal = await contract1.remove_proposal(
            rootState.e.cur_Selected.pk,
            ideaidis
          );
          await removeproposal.wait();
          console.log("removed proposal");
        }
      }
    },
    async getIdeas({ state, rootState, commit }) {
      console.log("hiii");
      const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545/");
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        proposalContractAddress,
        proposal_abi,
        signer
      );
      const projectProposals = await contract.getProjectProposal.staticCall(
        rootState.e.cur_Selected.pk
      );
      console.log(projectProposals);
      commit("setIdeas", projectProposals);
      console.log(state.idea_detail);
      console.log("checking ideas");
      const gotidea = await contract.getIdea.staticCall(
        rootState.e.cur_Selected.pk
      );
      for (let i = 0; i < gotidea.length; i++) {
        const checker = await contract.getideastat.staticCall(gotidea[i].idea);
        if (!checker) {
          const removeproposal = await contract.remove_proposal(
            rootState.e.cur_Selected.pk,
            gotidea[i].ideaid
          );
          await removeproposal.wait();
          //console.log("removed proposal");
        }
      }
      console.log("done checking");
    },

    // listenproposal(proposaladd, provider) {
    //   return new Promise((resolve) => {
    //     provider.once(proposaladd.hash, (proposalReceipt) => {
    //       console.log(
    //         `completed with ${proposalReceipt.confirmations} confirmations`
    //       );
    //       resolve();
    //     });
    //   });
    // },
  },
};

export default idea_module;
