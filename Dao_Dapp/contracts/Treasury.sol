// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Treasury is Ownable{
    mapping(uint256=>uint256) public pId_to_funding;
    mapping(uint256=>mapping(address=>uint256)) public pId_to_payee_to_amount;
    mapping(uint256 => mapping(address=>uint256)) private pId_to_whom_to_howmuch;

    function createProject(uint256 projectId,address payee,uint256 funds) external onlyOwner{
        require(projectId > 0, "Invalid project ID");
        require(payee != address(0), "Invalid payee address");
        require(funds > 0, "Invalid funding amount");
        pId_to_funding[projectId] +=funds;
        pId_to_payee_to_amount[projectId][payee]+=funds;
    }

    constructor() Ownable(msg.sender) {}

    function give_funds(uint256 projectId,address to_pay,uint256 amount) external payable{
        require(amount>0,"Amount must be greater than zero");
        require(pId_to_funding[projectId]>amount,"Ask valid project funds");
        pId_to_whom_to_howmuch[projectId][to_pay]+=amount;
        pId_to_funding[projectId]-=amount;
    }

    function contribute_to_project(uint256 projectId,uint256 amount,address payee)external payable{
        require(amount>0,'Amount should be valid');
        require(projectId>0,'Valid project ID');
        pId_to_funding[projectId]+=amount;
        pId_to_payee_to_amount[projectId][payee]+=amount;
    }

}