//SPDX-License-Identifier:MIT
pragma solidity ^0.8.19;


contract Smart_Proposal{

    uint256 min_pass_tokens;
    uint256 winning_tokens_proposer;
    uint256 winning_tokens_voters;

    constructor(uint256 first,uint256 second,uint256 three) {
        min_pass_tokens=first;
        winning_tokens_proposer=second;
        winning_tokens_voters=three;
    }

    struct Proposal{
        uint256 proposalId;
        uint256 project_id;
        string title;
        string description;
        uint256 current_tokens_favor;
        bool is_passed;
        address proposer;
        mapping(address=>uint256) who_what;
    }

    event ProposalMade(uint256 indexed projectId, string title, string description,address indexed proposer);
    event ProposalPassed(uint256 indexed project_id);
    event Voted(address indexed voter, uint256 indexed proposalId,  uint256 tokens);

    Proposal[] public proposals;

    function makeProposal()external {
        
    }

    function Votefor() external {

    }

    function getProposals() external {

    }

    function retrieveProposal() external {

    }


} 