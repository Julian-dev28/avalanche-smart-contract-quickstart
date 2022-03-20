import { ethers } from "hardhat";
import console from "console";

// Define the NFT
const name = "MockNFT";
const symbol = "Mock";
const _metadataUri = "ipfs://QmQ2RFEmZaMds8bRjZCTJxo4DusvcBdLTS6XuDbhp5BZjY";
const _maxTokens = "100";

async function deploy(
  name: string,
) {
  const contractFactory = await ethers.getContractFactory(name);
  return await contractFactory.deploy().then((f) => f.deployed());
}

async function main() {
  const [admin] = await ethers.getSigners();
  console.log(`Deploying contracts:`);

  const mockNFT = (
    await deploy("NFT")
  ).connect(admin);

  console.log({ mockNft: mockNFT.address });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
