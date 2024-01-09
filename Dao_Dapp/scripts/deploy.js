const { ethers } = require("hardhat");

async function main() {
  console.log("Deploying contract vote");
  const Vote = await ethers.getContractFactory("vote");
  const voteContract = await Vote.deploy();
  await voteContract.waitForDeployment();
  console.log("Deployment successful!");
  console.log("deployed to-");
  console.log(voteContract.target);

  console.log("Deploying contract proposal");
  const PROPOSAL = await ethers.getContractFactory("proposal");
  const proposalContract = await PROPOSAL.deploy();
  await proposalContract.waitForDeployment();
  console.log("Deployment successful!");
  console.log("deployed to-");
  console.log(proposalContract.target);

  console.log("Deploying contract Treasury");
  const TREASURY = await ethers.getContractFactory("Treasury");
  const treasuryContract = await TREASURY.deploy();
  await treasuryContract.waitForDeployment();
  console.log("Deployment successful!");
  console.log("deployed to-");
  console.log(treasuryContract.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Unhandled error:", error);
    process.exit(1);
  });
