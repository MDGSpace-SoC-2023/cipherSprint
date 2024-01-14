export const proposalContractAddress =
  "0x00b85211e10314efb2c4d3680ce7e0bac3753811";
export const proposal_abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "Proposals",
    outputs: [
      {
        internalType: "string",
        name: "problem_faced",
        type: "string",
      },
      {
        internalType: "string",
        name: "message",
        type: "string",
      },
      {
        internalType: "string",
        name: "project_name",
        type: "string",
      },
      {
        internalType: "address",
        name: "proponentaddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "project_id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_project_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_idea",
        type: "string",
      },
      {
        internalType: "string",
        name: "_problem_faced",
        type: "string",
      },
      {
        internalType: "string",
        name: "_message",
        type: "string",
      },
      {
        internalType: "address",
        name: "proponent_ad",
        type: "address",
      },
    ],
    name: "add_proposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "project_id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_idea",
        type: "string",
      },
    ],
    name: "remove_proposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
