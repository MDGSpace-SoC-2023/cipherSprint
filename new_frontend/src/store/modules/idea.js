//import { ethers } from "ethers";
// const { stringify } = require("json-bigint");

import {
  // proposal_abi,
  // proposalContractAddress,
  // voteContractAddress,
  // vote_abi,
} from "../../../constants.js";
const idea_module = {
  namespaced: true,
  state: {
    project: "",
    problem: "",
    idea: "",
    amount: 0,
    idea_detail: [],
  },
  mutations: {
    submitInfo(state) {
      console.log(state.idea);
    },
    // setIdeas(state, ideas) {
    //   state.idea_detail = stringify(Object.values(ideas));
    // },
  },
  //actions: {
  //   async Submit_Idea({ state, rootState }) {
  //     console.log("Hi");
  //     if (window.ethereum) {
  //       const accounts = await window.ethereum.request({
  //         method: "eth_requestAccounts",
  //       });
  //       const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545/");
  //       const signer = await provider.getSigner();
  //       const contract = new ethers.Contract(
  //         proposalContractAddress,
  //         proposal_abi,
  //         signer
  //       );
  //       // const contract2 = new ethers.Contract(
  //       //   proposalContractAddress,
  //       //   proposal_abi,
  //       //   provider
  //       // );
  //       contract.on("*", (event) => {
  //         //console.log(message);
  //         console.log(event.log);
  //       });
  //       try {
  //         console.log(rootState.e.cur_Selected.pk);
  //         console.log(state.project);
  //         console.log(state.idea);
  //         console.log(state.problem);
  //         console.log(state.amount);
  //         console.log(accounts[0]);
  //         // const demoTransaction = await contract.demo(8, {
  //         //   gasLimit: 8000000,
  //         //   gasPrice: ethers.parseUnits("30", "gwei"),
  //         // });

  //         // // Wait for the transaction to be mined
  //         // await demoTransaction.wait();

  //         // Query the updated value
  //         // const updatedValue = await contract.getUpdatedValue.staticCall();
  //         // console.log("Updated Value:", updatedValue);
  //         console.log(contract.add_proposal);
  //         const proposalTransaction = await contract.add_proposal(
  //           rootState.e.cur_Selected.pk,
  //           state.project,
  //           state.idea,
  //           state.problem,
  //           state.amount,
  //           accounts[0],
  //           {
  //             gasLimit: 8000000,
  //             gasPrice: ethers.parseUnits("30", "gwei"),
  //           }
  //         );
  //         await proposalTransaction.wait();
  //         console.log(proposalTransaction);
  //         console.log("Transaction mined");

  //         //await this.listenproposal(proposaladd, provider);
  //         // const myproblem = await contract.Proposals(
  //         //   rootState.e.cur_Selected.pk
  //         // );
  //         // console.log(myproblem);
  //         console.log(rootState.e.cur_Selected.pk);
  //         const projectProposals = await contract.getProjectProposal.staticCall(
  //           1
  //         );
  //         // await projectProposals.wait();
  //         if (projectProposals.length > 0) {
  //           console.log(projectProposals);
  //           console.log("Horjgnjerg");
  //         } else {
  //           console.log("No proposals found for the specified project.");
  //         }
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //   },
  //   // async Vote_on_Idea({ state, rootState }) {
  //   //   console.log("starting voting");
  //   //   if (window.ethereum) {
  //   //     const accounts = await window.ethereum.request({
  //   //       method: "eth_requestAccounts",
  //   //     });
  //   //     const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545/");
  //   //     const signer = await provider.getSigner();
  //   //     const contract = new ethers.Contract(
  //   //       voteContractAddress,
  //   //       vote_abi,
  //   //       signer
  //   //     );
  //   //     const voteTx = await contract.voting();
  //   //   }
  //   // },
  //   async getIdeas({ state, rootState, commit }) {
  //     console.log("hiii");
  //     const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545/");
  //     //const signer = await provider.getSigner();
  //     const contract = new ethers.Contract(
  //       proposalContractAddress,
  //       proposal_abi,
  //       provider
  //     );
  //     //console.log(await contract.Proposals);
  //     // const myproblem = await contract.Proposals(rootState.e.cur_Selected.pk);
  //     // console.log(myproblem);

  //     //const projectIdea = await contract.getIdea(rootState.e.cur_Selected.pk);
  //     const projectProposals = await contract.getProjectProposal.staticCall(
  //       rootState.e.cur_Selected.pk
  //     );
  //     console.log(projectProposals);
  //     commit("setIdeas", projectProposals);

  //     // for (let i = 0; i < projectProposals.length; i++) {
  //     //   const curidea = await projectProposals[i];
  //     //   // const curideaid = await projectIdea[i].ideaid;
  //     //   // state.idea_names.push(curidea);
  //     //   state.idea_detail.push(curidea);
  //     // }
  //     console.log(state.idea_detail);
  //     // for (let i = 0; i < contract.Idea.length; i++) {
  //     //   const curidea = await contract.Idea[i].idea;
  //     //   const curideaid = await contract.Idea[i].ideaid;
  //     //   state.idea_names.push(curidea);
  //     //   state.idea_ids.push(curideaid);
  //     // }
  //     console.log("hi");
  //     //console.log(state.idea_names);
  //   },
  //   // listenproposal(proposaladd, provider) {
  //   //   return new Promise((resolve) => {
  //   //     provider.once(proposaladd.hash, (proposalReceipt) => {
  //   //       console.log(
  //   //         `completed with ${proposalReceipt.confirmations} confirmations`
  //   //       );
  //   //       resolve();
  //   //     });
  //   //   });
  //   // },
  // },
};

export default idea_module;
