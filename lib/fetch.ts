import { createPublicClient, http } from "viem";
import { base } from "viem/chains";
import { alchemyID, phiTeaserNFTContract } from "./config";
import abi from "./abi";

export const client = createPublicClient({
  chain: base,
  transport: http("https://base-mainnet.g.alchemy.com/v2/" + alchemyID),
});

export async function fetchTotalSupply() {
  return (await client.readContract({ address: phiTeaserNFTContract, abi, functionName: "tokenIdCounter" })).toLocaleString();
}

// const filterLogMint = (fromBlock: bigint, toBlock?: bigint) => ({
//   address: phiTeaserNFTContract,
//   event: parseAbiItem("event Minted(address to, uint256 tokenId)"),
//   fromBlock,
//   toBlock,
// });

// const mainnetClient = createPublicClient({
//   chain: mainnet,
//   transport: http(),
//   // transport: http("https://eth-mainnet.g.alchemy.com/v2/" + alchemyID)
// });
// async function getENSName(address: `0x${string}`) {
//   try {
//     return (await mainnetClient.getEnsName({ address })) || address;
//   } catch {
//     return address;
//   }
// }

// export async function fetchMintedList() {
//   const logs = (await client.getLogs(filterLogMint(BigInt(12252916)))).slice(0, 100);
//   return await Promise.all(logs.map((log) => getENSName(decodeEventLog({ ...log, abi }).args.to.toLowerCase() as `0x${string}`)));
// }

export async function fetchMintedList() {
  return [
    "peruvianbooby.eth",
    "oji3.eth",
    "shugo.eth",
    "sk8rcat.eth",
    "gurix.eth",
    "bitbigcat.eth",
    "0x9ebe547ee00899aca5ab99f05182f2d5b7f37827",
    "montis88.eth",
    "pitchapong.eth",
    "starny.eth",
    "wiwivovo.eth",
    "khadar.eth",
    "hyperstone.eth",
    "pandario.eth",
    "chudarin.eth",
    "nebuchadnezzarii.eth",
    "yanagisawa.eth",
    "neverless008.eth",
    "someonerich.eth",
    "0xaa90befc76b37f487eec5c1a593ea5b9826440be",
    "aydune.eth",
    "songlaoshi008.eth",
    "sellerfound.eth",
    "wooos.eth",
    "cryptojing.eth",
    "nevermore008.eth",
    "3chih21.eth",
    "0xb1ca00e303e9b282e544d3c023d575650d091cf4",
    "0x9b6bea03f2e073a7c62f909c1e4919854d223976",
    "3antar89.eth",
    "mrsavas.eth",
    "rsr031101.eth",
    "dancube.eth",
    "bitro.eth",
    "web3jay.eth",
    "nimanourani.eth",
    "hellodude.eth",
    "zkpscroll.eth",
    "lepro.eth",
    "0x29930111ff12d3c75b5be8889568c5ad6a9d6cb1",
    "olliej.eth",
    "daffy.eth",
    "0xdeadbeef.eth",
    "madebyphi.eth",
    "arvex28.eth",
    "zkether.eth",
    "pixe1.eth",
    "881888188.eth",
    "vkixz.eth",
    "youthonrepeat.eth",
    "95508.eth",
    "lucky-v.eth",
    "pazzekalle.eth",
    "agustin152.eth",
    "flash3dx.eth",
    "nepara.eth",
    "wstyle.eth",
    "leilei.eth",
    "degend.eth",
    "himanii.eth",
    "mrblue88.eth",
    "yao1900.eth",
    "heycape.eth",
    "saoge.eth",
    "pranjalbora.eth",
    "wazaqik.eth",
    "vv660.eth",
    "shuigod.eth",
    "alextrader.eth",
    "laosao.eth",
    "shutanaka.eth",
    "randyprayuda.eth",
    "0x1b0a905150853a0a72c2ff9b496bee7215370bb7",
    "0x33fcaddb3ca4f9a556324170d911e36881f871ba",
    "gh8st.eth",
    "0xb3076c16e1e0b3ed70649da1f5454962e09999af",
    "0x6b068fd9a96059bd503027df9f3a4afada43d204",
    "friedchickie.eth",
    "kazimkabul.eth",
    "0x284410e63f330019d3ec8020131446e573bf95eb",
    "0x2d76220bdd99902a2e085252010ba3e092ae7124",
    "pehh.eth",
    "sg123.eth",
    "7⃣🎱9⃣.eth",
    "0xccf9922c0477dc80ce6a5e9f6e0d6b4d39c68ff2",
    "hisdudeness.eth",
    "love2bluff.eth",
    "zeuse.eth",
    "kryptojaeger.eth",
    "sanyigg520.eth",
    "valdore.eth",
    "innal.eth",
    "0x81e877dd467f65b79aff559a8fafed6e95f01ad8",
    "0x04d4c9c6f5984a472996402f6f61e45e8740ad6a",
    "luckyavier.eth",
    "0x054b541d705f654ae8c9cefb075f76c59f75fe8e",
    "aminnd.eth",
    "leroijenkins.eth",
    "wasabiwaste.eth",
    "princessaaliyah.eth",
  ];
}
