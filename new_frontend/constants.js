export const proposalContractAddress =
  "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
export const voteContractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
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
      {
        internalType: "bytes32",
        name: "_ideaid",
        type: "bytes32",
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
];
