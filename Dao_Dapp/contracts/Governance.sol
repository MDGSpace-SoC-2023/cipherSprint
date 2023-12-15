// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Governance is ERC20, ERC20Votes, ERC20Permit {
  uint256 public s_maxSupply = 1000000000000000000000000;

  constructor() ERC20("Governance", "GT") ERC20Permit("Governance") {
    _mint(msg.sender, s_maxSupply);
  }

  // The functions below are overrides required by Solidity.
  function nonces(address owner) public view virtual override(ERC20Permit, Nonces) returns (uint256){
    return super.nonces(owner);
  }

   
  function _update(address from,address to,uint256 value) internal virtual override (ERC20, ERC20Votes){
    super._update(from,to,value);
  }
 

  function _mint(address to, uint256 amount) internal override(ERC20) {
    super._mint(to, amount);
  }

  function _burn(address account, uint256 amount) internal override(ERC20) {
    super._burn(account, amount);
  }
}