//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract proposal{

    struct IDEA{
        string idea;
        string problem_faced;
        uint256 amount ;
        string project_name;
        address proponentaddress;
    }
    struct IDEAS{
        string idea1;
        string problem_faced1;
        uint256 amount1 ;
        string project_name1;
        //address proponentaddress;
    }

    event LogInformation(string message);
    event addedproposal(IDEA i);
    struct ideas{
        string idea;
        bytes32 ideaid;
    }
    //uint8 public currentValue;
    mapping(uint256=> ideas[] ) public Idea;
    mapping(uint256 => mapping(bytes32 => IDEA)) public Proposals;
//     function demo(uint256 dummy) external {
//     emit LogInformation("hii");
//     currentValue = dummy + 1;
//     //emit ValueUpdated(updatedValue); // Emit an event to signal the update
// }
// function getUpdatedValue() external view returns (uint8) {
//         return currentValue;
//     }

    function add_proposal(uint256 project_id,string memory _project_name,string memory _idea,string memory _problem_faced,uint256 _amount,address proponent_ad) public{
        bytes32 idea_id=keccak256(bytes(_idea));
        emit LogInformation("Hello");
        Proposals[project_id][idea_id]=(IDEA(_idea,_problem_faced,_amount,_project_name,proponent_ad)); 
        emit LogInformation(
            "Hello"
        );
        Idea[project_id].push(ideas(_idea,idea_id));
        emit LogInformation("Hello");
        emit addedproposal(Proposals[project_id][idea_id]);
    }

    function remove_proposal(uint256 project_id,bytes32 _ideaid) public {
        delete Proposals[project_id][_ideaid];
        
    }
    function getProjectProposal(uint256 project_id) external view returns (IDEAS[] memory){
        IDEAS[] memory projectProposals=new IDEAS[](Idea[project_id].length);
        for(uint256 i=0;i<Idea[project_id].length;i++){
            bytes32 idea_id=Idea[project_id][i].ideaid;
            projectProposals[i]=IDEAS(Proposals[project_id][idea_id].idea,Proposals[project_id][idea_id].problem_faced,Proposals[project_id][idea_id].amount,Proposals[project_id][idea_id].project_name);
        }
        // emit LogInformation("Hello from someFunction!");
        return projectProposals;
    }
    function getIdea(uint8 project_id) external view returns (ideas[] memory){
        return Idea[project_id];

    }

}