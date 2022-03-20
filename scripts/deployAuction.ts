import { ethers } from "hardhat";
import console from "console";

// Define the NFT
const _nft = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const _nftid = "1";
const _startingBid = "1";

async function deploy(
  name: string,
  ...params: [string, string, string]) {
  const contractFactory = await ethers.getContractFactory(name);
  return await contractFactory.deploy(...params).then((f) => f.deployed());
}

async function main() {
  const [admin] = await ethers.getSigners();
  console.log(`Deploying contracts:`);

  const auction = (
    await deploy("Auction", _nft, _nftid, _startingBid)
  ).connect(admin);

  console.log({ auction: auction.address });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
