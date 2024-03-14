import { ArtworkKey } from "@/components/draggable";

export const credentialAttributes: Record<ArtworkKey, { title: string; requirement: string; url: string; description?: string }> = {
  "chess-uniswap": {
    title: "Uniswap Newbie",
    requirement: "Swap once on Uniswap V3",
    url: "https://uniswap.org/",
  },
  "crowd-front": {
    title: "Governance Voter",
    requirement: "Vote once in Arbitrum Governance",
    url: "https://www.tally.xyz/gov/arbitrum/",
  },
  "hash-hunter-aave": {
    title: "Hash Hunter - Aave",
    requirement: "Have a tx with a hash inclunding a string 61617665 (aave)",
    url: "https://uniswap.org/",
  },
  "moduler-believer": {
    title: "Moduler Believer",
    requirement: "Claim $TIA airdrop",
    url: "https://celestia.org/",
  },
  "ethereum-builder": {
    title: "Ethereum Builder",
    requirement: "Participate ETH Global Hackathon",
    url: "https://app.airstack.xyz/query/qbCWxsxdyu/",
  },
  wawa: {
    title: "Wawa",
    requirement: "First Tx Date / Tx Counts / Phi Active Rank / Max Gas Price",
    description: "An NFT collection like no other — with NFTs generated based on crypto community members' wallet activity.",
    url: "https://wawa.philand.xyz/",
  },
  "ethereum-space-station": {
    title: "Weekend Degen",
    requirement: "Have 10 tx on Ethereum over the weekend",
    url: "https://etherscan.io/",
  },
  phi: {
    title: "Phi 2.0",
    requirement: "Mint a Credential NFT on Phi",
    url: "https://phi-teaser.vercel.app/",
  },
  "ds-planet": {
    title: "Degenscore Planet",
    requirement: "Mint a Degenscore Beacon NFT",
    url: "https://degenscore.com/",
  },
  "arb-game": {
    title: "Arbitrum Game Cartridge",
    requirement: "Have a tx on Arbitrum",
    url: "https://arbiscan.io/",
  },
  "op-game": {
    title: "Optimism Game Cartridge",
    requirement: "Have a tx on Optimism",
    url: "https://optimistic.etherscan.io/",
  },
  "ens-newbie": {
    title: "ENS Newbie",
    requirement: "Buy a END domain",
    url: "https://app.ens.domains/",
  },
  "sepolia-builder": {
    title: "Sepolia City",
    requirement: "Deploy a smart contract on Sepolia testnet",
    url: "https://sepolia.dev/",
  },
  heartbeat: {
    title: "Heartbeat",
    requirement: "A beating heart based on your on-chain activity",
    url: "https://heartbeat.themetagame.xyz/",
  },
  gitcoin: {
    title: "Gitcoin Donor",
    requirement: "Donate once on Gitcoin",
    url: "https://gitcoin.co/",
  },
  "op-airdrop": {
    title: "OP Airdrop Recipient",
    requirement: "Number of $OP airdrop",
    url: "https://op.com/",
  },
  "ethereum-first-tx-date": {
    title: "Ethereum 20XX",
    requirement: "Date of first tx on Ethereum",
    url: "https://etherscan.io/",
  },
  "shib-profit": {
    title: "$SHIB HODLer",
    requirement: "All-time profit of $SHIB",
    url: "https://coinmarketcap.com/currencies/shiba-inu/",
  },
  "farcaster-ink": {
    title: "Farcaster Ink",
    requirement: "Cast once on Warpcast",
    url: "https://farcaster.xyz/",
  },
  "basepaint-nouns-base": {
    title: "The Yellow Collective on Base",
    requirement: "Mint a Collective Nouns on Base",
    url: "https://www.yellowcollective.xyz/",
  },
  "basepaint-mickymouse-cc0": {
    title: "Celebrate Mickey Mouse CC0",
    requirement: "mint Day #146 on Basepaint",
    url: "https://basepaint.xyz/canvas/146",
  },
  "piggy-bank": {
    title: "Piggy Bank",
    requirement: "Hold $wBTC for over a year",
    url: "https://wbtc.network/",
  },
  "gnosis-owl": {
    title: "Safe Owl",
    requirement: "Setup a multi-sig wallet with Gnosis Safe with at least 2 signers",
    url: "https://safe.global/",
  },
};
