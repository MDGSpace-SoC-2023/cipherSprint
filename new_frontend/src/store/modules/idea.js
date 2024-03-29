import { ethers } from "ethers";
import backend_client from "../../../BackendClient";

import {
  proposal_abi,
  proposalContractAddress,
  voteContractAddress,
  vote_abi,
  treasuryContractAddress,
  treasury_abi,
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
    error_message: "",
    passIdeas: [],
    rejectedIdeas: [],
    isRejected:false,
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
    setPassedIdeas(state, data) {
      const newArray = Object.values(data).map((item) => {
        const integerValue = Number(item[2]);

        return {
          ...item,
          2: Number.isSafeInteger(integerValue) ? integerValue : item[2],
        };
      });
      state.passIdeas = newArray;
    },
    setRejectedIdeas(state, data) {
      const newArray = Object.values(data).map((item) => {
        const integerValue = Number(item[2]);

        return {
          ...item,
          2: Number.isSafeInteger(integerValue) ? integerValue : item[2],
        };
      });
      state.rejectedIdeas = newArray;
    },
    curSelected(state, idea) {
      state.cur_SelectedIdea = idea;
    },
    setFormData(state) {
      state.idea = "";
      state.problem = "";
      state.amount = 0;
      state.project = "";
    },
  },
  actions: {
    async Submit_Idea({ state, rootState, commit, dispatch }) {
      var checker1 = 0;
      for (let i = 0; i < state.idea_detail.length; i++) {
        console.log(state.idea_detail[i][0]);
        if (state.idea_detail[i][0] == state.idea) {
          checker1++;
          break;
        }
      }
      console.log(state.problem.length);
      console.log(checker1);
      console.log(state.amount);
      console.log(state.idea);
      console.log(state.problem);
      console.log(state.amount);
      console.log(rootState.e.cur_Selected);
      if (state.amount >= rootState.e.cur_Selected.project_amount) {
        console.log("can not give this amount");
        state.error_message = "Amount exceeded project budget";
      } else if (checker1 > 0) {
        console.log("Same idea");
        state.error_message = "Give unique Idea";
      } else if (state.idea.length === 0) {
        console.log("Null");
        state.error_message = "Required Idea input";
      } else if (state.problem.length === 0) {
        console.log("Null");
        state.error_message = "Required Problem input";
      } else {
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
            const getideaarray = await contract.getIdea.staticCall(
              rootState.e.cur_Selected.pk
            );
            let checker = 0;
            for (let i = 0; i < getideaarray.length; i++) {
              if (getideaarray[i].idea == state.idea) {
                checker++;
                break;
              }
            }
            console.log(checker);
            if (checker != 0) {
              console.log("give unique idea");
              state.error_message = "give unique idea";
            } else {
              const proposalTransaction = await contract.add_proposal(
                rootState.e.cur_Selected.pk,
                rootState.e.cur_Selected.project_topic,
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
              const projectProposals =
                await contract.getProjectProposal.staticCall(
                  rootState.e.cur_Selected.pk
                );
              // await projectProposals.wait();
              if (projectProposals.length > 0) {
                console.log(projectProposals);
                console.log("Horjgnjerg");
                state.error_message = "";
                const payload = rootState.e.cur_Selected;
                dispatch("getIdeas", payload);
                console.log(state.idea_detail);
              } else {
                console.log("No proposals found for the specified project.");
              }
              commit("setFormData");
            }
          } catch (error) {
            console.log(error);
          }
        }
      }
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
        console.log(contract);
        const contract1 = new ethers.Contract(
          proposalContractAddress,
          proposal_abi,
          signer
        );
        const contract2 = new ethers.Contract(
          treasuryContractAddress,
          treasury_abi,
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
        console.log(Number(ideavotes));
        console.log(
          Math.floor(rootState.e.cur_Selected.project_members.length / 2) + 1
        );

        if (
          Number(ideavotes) >=
          Math.floor(rootState.e.cur_Selected.project_members.length / 2) + 1
        ) {
          console.log("idea passed!!!");
          //state.isPassed = true;
          //state.passedIdeas.push(state.cur_SelectedIdea);
          //console.log(state.passedIdeas)
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
          const ideadetail = await contract1.getideadetail(
            rootState.e.cur_Selected.pk,
            ideaidis
          );
          console.log(ideadetail);
          const fundTx = await contract2.give_funds(
            rootState.e.cur_Selected.pk,
            ideadetail.proponentaddress,
            ideadetail.amount,
            {
              gasLimit: 8000000,
              gasPrice: ethers.parseUnits("30", "gwei"),
            }
          );
          await fundTx.wait();
          console.log("done funding");
          const amt =
            rootState.e.cur_Selected.project_amount - Number(ideadetail.amount);
          console.log(amt);
          try {
            const response = await backend_client.patch(
              `/project/${rootState.e.cur_Selected.pk}/update/`,
              { amount: amt }
            );
            console.log(response.data);
          } catch (error) {
            console.log(error);
          }
          const removeproposal = await contract1.remove_proposal(
            rootState.e.cur_Selected.pk,
            ideaidis,
            1
          );
          await removeproposal.wait();
          console.log("removed proposal");
        }
      }
    },
    async getIdeas({ state, rootState, commit }, payload) {
      try {
        console.log("hiii");
        console.log(payload);

        const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545/");
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(
          proposalContractAddress,
          proposal_abi,
          signer
        );

        console.log(rootState.e.cur_Selected.pk);
        const updatingstate = await contract.updateState(1, {
          gasLimit: 8000000,
          gasPrice: ethers.parseUnits("30", "gwei"),
        });
        await updatingstate.wait();
        console.log(updatingstate);
        // Use await to wait for the result of the asynchronous call

        console.log("checking ideas");

        // Use await to wait for the result of the asynchronous call
        const gotidea = await contract.getIdea.staticCall(
          rootState.e.cur_Selected.pk
        );
        console.log(gotidea);
        console.log("111");
        // Iterate through the results
        for (let i = 0; i < gotidea.length; i++) {
          if (gotidea[i].idea != "") {
            console.log(gotidea[i].idea);
            const checker = await contract.getideastat.staticCall(
              gotidea[i].idea
            );
            //await checker.wait();
            //console.log();
            console.log("22");
            console.log(checker);
            if (!checker) {
              state.isRejected=true;
              // Use await to wait for the result of the asynchronous call
              const removeproposal = await contract.remove_proposal(
                rootState.e.cur_Selected.pk,
                gotidea[i].ideaid,
                2
              );

              // Use await to wait for the transaction to be mined
              await removeproposal.wait();

              console.log("rejected proposal");
            }
          }
        }

        console.log("done checking");
        console.log("getting rejected proposals");
        const RejectedProposals = await contract.getrejectedProposal.staticCall(
          rootState.e.cur_Selected.pk
        );
        commit("setRejectedIdeas", RejectedProposals);
        console.log("got rejected proposals");
        console.log(RejectedProposals);
        const projectProposals = await contract.getProjectProposal.staticCall(
          rootState.e.cur_Selected.pk
        );
        console.log("ongoing projects");
        console.log(projectProposals);

        // Commit the result to the Vuex store
        commit("setIdeas", projectProposals);

        console.log(state.idea_detail);
        const PassedProposals = await contract.getpassedProposal.staticCall(
          rootState.e.cur_Selected.pk
        );
        commit("setPassedIdeas", PassedProposals);

        console.log(PassedProposals);
      } catch (error) {
        // Handle errors here, for example, log the error
        console.error("Error in getIdeas action:", error);
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
  getters: {
    getIdeas: (state) => state.idea_detail,
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
