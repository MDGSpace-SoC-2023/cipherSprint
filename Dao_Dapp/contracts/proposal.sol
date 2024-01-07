//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract proposal{

    struct IDEA{
        
        string problem_faced;
        string message;
        string project_name;
        address proponentaddress;
    }

    mapping(uint256 => mapping(string => IDEA)) public Proposals;

    function add_proposal(uint256 project_id,string memory _project_name,string memory _idea,string memory _problem_faced,string memory _message,address proponent_ad) public{
        Proposals[project_id][_idea]=(IDEA(_problem_faced,_message,_project_name,proponent_ad)); 
    }

    function remove_proposal(uint256 project_id,string memory _idea) public {
        delete Proposals[project_id][_idea];
    }


}