import { createPublicClient, decodeEventLog, http, parseAbi, parseAbiItem } from "viem";
import { mainnet, sepolia } from "viem/chains";
import { alchemyID, phiTeaserNFTContract } from "./config";
import abi from "./abi";

export const client = createPublicClient({
  chain: sepolia,
  transport: http(),
  // transport: http("https://eth-sepolia.g.alchemy.com/v2/" + alchemyID)
});

export async function fetchTotalSupply() {
  return (await client.readContract({ address: phiTeaserNFTContract, abi, functionName: "tokenIdCounter" })).toLocaleString();
}

const filterLogMint = (fromBlock: bigint, toBlock?: bigint) => ({
  address: phiTeaserNFTContract,
  event: parseAbiItem("event Minted(address to, uint256 tokenId)"),
  fromBlock,
  toBlock,
});

const mainnetClient = createPublicClient({
  chain: mainnet,
  transport: http(),
  // transport: http("https://eth-mainnet.g.alchemy.com/v2/" + alchemyID)
});
async function getENSName(address: `0x${string}`) {
  try {
    return (await mainnetClient.getEnsName({ address })) || address;
  } catch {
    return address;
  }
}

export async function fetchMintedList() {
  // TODO
  const logs = (await client.getLogs(filterLogMint(BigInt(5470089)))).slice(0, 100);
  return await Promise.all(logs.map((log) => getENSName(decodeEventLog({ ...log, abi }).args.to)));
}
