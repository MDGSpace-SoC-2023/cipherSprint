import { ethers } from "ethers";
import { proposal_abi, proposalContractAddress } from "../../../constants.js";
const idea_module = {
  namespaced: true,
  state: {
    project: "",
    problem: "",
    idea: "",
    amount: 0,
  },
  mutations: {
    submitInfo(state) {
      console.log(state.idea);
    },
  },
  actions: {
    async Submit_Idea({ state, rootState }) {
      console.log("Hi");
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(
          proposalContractAddress,
          proposal_abi,
          signer
        );
        try {
          console.log(rootState.e.cur_Selected.pk);
          const proposalTransaction = await contract.add_proposal(
            rootState.e.cur_Selected.pk,
            state.project,
            state.idea,
            state.problem,
            state.amount,
            accounts[0],
            {
              gasLimit: 300000,
              gasPrice: ethers.parseUnits("30", "gwei"),
            }
          );
          await proposalTransaction.wait();
          console.log("Transaction mined");
          //await this.listenproposal(proposaladd, provider);
          console.log(
            contract.Proposals[rootState.e.cur_Selected.project_topic][
              state.idea
            ]
          );
        } catch (error) {
          console.log(error);
        }
      }
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
