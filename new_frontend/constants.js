export const proposalContractAddress =
  "0x2bdCC0de6bE1f7D2ee689a0342D76F52E8EFABa3";
export const voteContractAddress = "0x82e01223d51Eb87e16A03E24687EDF0F294da6f1";
export const treasuryContractAddress =
  "0x7969c5eD335650692Bc04293B07F5BF2e7A673C0";
export const treasury_abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "payee",
        type: "address",
      },
    ],
    name: "contribute_to_project",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to_pay",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "give_funds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "pId_to_funding",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "pId_to_payee_to_amount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
export const vote_abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_project_id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_idea",
        type: "string",
      },
    ],
    name: "getnumvotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_project_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_user_id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_idea",
        type: "string",
      },
    ],
    name: "getvoted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
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
    name: "proposal_votes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
    name: "voted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_project_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_user_id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_idea",
        type: "string",
      },
    ],
    name: "voting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
export const proposal_abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "LogInformation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "idea",
            type: "string",
          },
          {
            internalType: "string",
            name: "problem_faced",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
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
        indexed: false,
        internalType: "struct proposal.IDEA",
        name: "i",
        type: "tuple",
      },
    ],
    name: "addedproposal",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "Idea",
    outputs: [
      {
        internalType: "string",
        name: "idea",
        type: "string",
      },
      {
        internalType: "bytes32",
        name: "ideaid",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "Proposals",
    outputs: [
      {
        internalType: "string",
        name: "idea",
        type: "string",
      },
      {
        internalType: "string",
        name: "problem_faced",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
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
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
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
    ],
    name: "getIdea",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "idea",
            type: "string",
          },
          {
            internalType: "bytes32",
            name: "ideaid",
            type: "bytes32",
          },
        ],
        internalType: "struct proposal.ideas[]",
        name: "",
        type: "tuple[]",
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
    ],
    name: "getProjectProposal",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "idea1",
            type: "string",
          },
          {
            internalType: "string",
            name: "problem_faced1",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "amount1",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "project_name1",
            type: "string",
          },
        ],
        internalType: "struct proposal.IDEAS[]",
        name: "",
        type: "tuple[]",
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
        internalType: "bytes32",
        name: "idea_id",
        type: "bytes32",
      },
    ],
    name: "getideadetail",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "idea",
            type: "string",
          },
          {
            internalType: "string",
            name: "problem_faced",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
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
        internalType: "struct proposal.IDEA",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_idea",
        type: "string",
      },
    ],
    name: "getideastat",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
    ],
    name: "getpassedProposal",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "idea1",
            type: "string",
          },
          {
            internalType: "string",
            name: "problem_faced1",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "amount1",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "project_name1",
            type: "string",
          },
        ],
        internalType: "struct proposal.IDEAS[]",
        name: "",
        type: "tuple[]",
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
    ],
    name: "getrejectedProposal",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "idea1",
            type: "string",
          },
          {
            internalType: "string",
            name: "problem_faced1",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "amount1",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "project_name1",
            type: "string",
          },
        ],
        internalType: "struct proposal.IDEAS[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastUpdateTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "passedProposals",
    outputs: [
      {
        internalType: "string",
        name: "idea1",
        type: "string",
      },
      {
        internalType: "string",
        name: "problem_faced1",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "project_name1",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rejectedProposals",
    outputs: [
      {
        internalType: "string",
        name: "idea1",
        type: "string",
      },
      {
        internalType: "string",
        name: "problem_faced1",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "project_name1",
        type: "string",
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
        internalType: "bytes32",
        name: "_ideaid",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "casenumber",
        type: "uint256",
      },
    ],
    name: "remove_proposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "timestart",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "adder",
        type: "uint256",
      },
    ],
    name: "updateState",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
