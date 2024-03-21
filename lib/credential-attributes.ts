import { ArtworkKey } from "@/components/draggable";

export const credentialAttributes: Record<ArtworkKey, { title: string; requirement: string; url: string; description?: string }> = {
  "chess-uniswap": {
    title: "Uniswap Newbie",
    requirement: "Perform your first swap on Uniswap V3 using Arbitrum",
    description:
      "Uniswap is a decentralized trading platform enabling cryptocurrency trades. This award is granted to users who perform their first swap using Arbitrum on Uniswap V3. It provides a user-friendly interface and utilizes smart contracts for a fast and efficient trading experience.",
    url: "https://uniswap.org/",
  },
  "crowd-front": {
    title: "Governance Voter",
    requirement: "Participate in at least one governance vote on the Arbitrum Govenance",
    description:
      "This achievement acknowledges the active participation of users in the democratic process of the Arbitrum network by casting a vote in at least one governance decision. It highlights the user's commitment to shaping the future and contributing to the governance of the Arbitrum ecosystem through informed voting on Tally.",
    url: "https://www.tally.xyz/gov/arbitrum/",
  },
  "hash-hunter-aave": {
    title: "Hash Hunter - Aave",
    requirement: "Complete a transaction that includes the hexadecimal string '61617665' (representing 'aave') in its hash",
    description:
      "This award celebrates the keen eye for detail, requiring a transaction hash that includes '61617665', the hexadecimal representation of 'aave' (61 = 'a', 61 = 'a', 76 = 'v', 65 = 'e'). Aave is a decentralized finance protocol that enables borrowing and lending of cryptocurrencies.",
    url: "https://app.aave.com/",
  },
  "moduler-believer": {
    title: "Celestia Moduler Believer",
    requirement: "Successfully claim the $TIA airdrop",
    description:
      "This sticker is a token of appreciation for those who have engaged with the Celestia ecosystem by claiming the $TIA airdrop. Celestia stands out as a modular blockchain platform, particularly known for its innovative Data Availability (DA) layer. This layer enhances the blockchain's scalability and integrity by efficiently distributing and storing data.",
    url: "https://celestia.org/",
  },
  "ethereum-builder": {
    title: "ETH Global Innovator",
    requirement: "Engage in an ETH Global Hackathon event",
    description:
      "This sticker acknowledges individuals who have actively participated in an ETH Global Hackathon, demonstrating their creativity and skills in Ethereum-based project development. ETH Global Hackathons are events where developers and enthusiasts come together to innovate and build on the Ethereum blockchain, pushing the boundaries of decentralized applications and solutions. This recognition showcases the recipient's dedication to Ethereum's ecosystem and their contribution to its advancement.",
    url: "https://app.airstack.xyz/query/qbCWxsxdyu/",
  },
 "wawa": {
  title: "Wawa - Unique avatar",
  requirement: "Own an Ethereum address with transaction history",
  description:
  "This sticker is awarded to those who own an Ethereum address with a history of transactions, showcasing their active participation in the Ethereum network. This is a recognition of your engagement with Ethereum, highlighting your involvement in various transactions and activities on the blockchain. By owning an Ethereum address with transaction history, you're not just a bystander but an active participant in the evolving world of cryptocurrency.",
  url: "https://wawa.philand.xyz/",
    },
  "ethereum-space-station": {
    title: "Weekend Ethereum Degen",
    requirement: "Complete at least 10 transactions on the Ethereum network during the most recent weekend",
    description:
      "This sticker is a nod to those who are actively engaged with the Ethereum network, particularly over the weekends. By completing at least 10 transactions between Saturday and Sunday on the Ethereum network, recipients demonstrate their continuous involvement and enthusiasm for Ethereum's evolving ecosystem. It highlights the dedication to using Ethereum regularly and participating in its diverse range of transactions and activities.",
    url: "https://etherscan.io/",
  },
  phi: {
    title: "Phi 2.0",
    requirement: "Mint a Phi 2.0 teaser NFT",
    description:
      "This sticker celebrates users who engage with the Phi 2.0 by minting a NFT. Key feature of Phi 2.0, is a decentralized system that allows indexing of blockchain data as Onchain Credentials. It enables users to curate and verify this data, creating diverse NFTs that can include art, photos, GIFs, and more. This recognition symbolizes your active role in shaping your onchain identity, showcasing your unique interactions with blockchain technology through the Phi ecosystem.",
    url: "https://phi-teaser.vercel.app/",
  },
  "ds-planet": {
    title: "Degenscore Planet",
    requirement: "Mint a Degenscore Beacon NFT",
    description:
      "This sticker recognizes individuals who have minted a Degenscore Beacon NFT, marking their participation in the Degenscore community. Degenscore is a unique platform that assesses and scores the on-chain behavior of wallet holders. By minting this Beacon NFT, users demonstrate their engagement with the ecosystem, highlighting their interest in and commitment to the evolving landscape of decentralized finance and blockchain analytics.",
    url: "https://degenscore.com/",
  },
  "arb-game": {
    title: "Arbitrum Game Cartridge",
    requirement: "Complete a transaction on Arbitrum",
    description:
      "This sticker is awarded to users who have conducted a transaction on the Arbitrum network, marking their engagement with this Layer 2 scaling solution for Ethereum. Arbitrum aims to enhance the speed and efficiency of Ethereum transactions while maintaining security. ",
    url: "https://arbitrum.io/",
  },
  "op-game": {
    title: "Optimism Game Cartridge",
    requirement: "Complete a transaction on Optimism",
    description:
      "This sticker celebrates users who have completed a transaction on the Optimism network. Optimism is a Layer 2 scaling solution for Ethereum, known for its Optimistic Rollups, which significantly reduce fees and increase transaction throughput while maintaining Ethereum's security.",
    url: "https://www.optimism.io/",
  },
  "ens-newbie": {
    title: "ENS Newbie",
    requirement: "Purchase an ENS domain",
    description:
      "This sticker is awarded to individuals who have stepped into the world of Ethereum Name Service (ENS) by purchasing their own ENS domain. ENS domains provide a user-friendly alias for Ethereum addresses, making cryptocurrency transactions more accessible and personalized. Acquiring an ENS domain represents the user’s entry into a community focused on simplifying and humanizing blockchain interactions.",
    url: "https://app.ens.domains/",
  },
  "sepolia-builder": {
    title: "Sepolia City",
    requirement: "Deploy a smart contract on Sepolia testnet",
    description:
      "Awarded to developers who deploy a smart contract on Sepolia, this sticker recognizes their contribution to Ethereum's development ecosystem. Sepolia testnet is ideal for contract development due to its similarity to the Ethereum Mainnet in terms of environment and functionality, while offering a risk-free testing ground. Deploying contracts on Sepolia enables developers to experiment and refine their applications, ensuring robustness and compatibility before launching on the Mainnet.",
    url: "https://sepolia.dev/",
  },
  heartbeat: {
    title: "Heartbeat",
    requirement: "Obtain a 'Heartbeat' based on your on-chain activity",
    description:
      "The 'Heartbeat' sticker is a unique recognition, awarded to users who obtain a visual 'Heartbeat' representing their on-chain activity. This dynamic and creative feature illustrates the vibrancy of a user's engagement with blockchain technology. It symbolizes the energy and frequency of their interactions in the digital realm, offering an innovative perspective on the user's blockchain involvement.",
    url: "https://heartbeat.themetagame.xyz/",
  },
  gitcoin: {
    title: "Gitcoin Passport Holder",
    requirement: "Obtain a Gitcoin Passport with a score of 20 or more",
    description:
      "This sticker is awarded to users who have demonstrated a significant level of trust and reputation within the Gitcoin community by achieving a score of 20 or more on their Gitcoin Passport. The Passport uses a decentralized approach to verify digital identities, enabling users to participate in a more secure and authentic online ecosystem. By reaching a score of 20, it shows active and trustworthy participation in the Gitcoin network.",
    url: "https://passport.gitcoin.co/",
  },
  "op-airdrop": {
    title: "OP Airdrop 1 Amount",
    requirement: "Receive tokens from Optimism's first airdrop",
    description:
      "This sticker is awarded to individuals who were recipients of Optimism’s first airdrop, recognizing their early involvement and positive contribution to the Optimism network. The first airdrop was a pivotal moment in Optimism's journey, aimed at rewarding users who actively contributed to the ecosystem’s growth.",
    url: "https://op.com/",
  },
  "ethereum-first-tx-date": {
    title: "Ethereum First transaction",
    requirement: "Date of your first transaction on Ethereum",
    description:
      "This sticker celebrates your first step into Ethereum. It's about the date when you made your first Ethereum transaction. This date marks when you started exploring the world of Ethereum, a key moment in your crypto journey. It's a special reminder of your beginnings in blockchain and a symbol of how far you've come.",
    url: "https://etherscan.io/",
  },
  "shib-profit": {
    title: "Profit of $SHIB in your wallet",
    requirement: "All-time profit of $SHIB",
    description:
      "This sticker is for those who've experienced profit from holding Shiba Inu ($SHIB). It's a badge of honor for investors who believed in $SHIB and saw returns. Whether you joined early or recently, this sticker represents your smart investment choice and your journey in the world of meme coins. It's a fun way to celebrate your success with $SHIB.",
    url: "https://coinmarketcap.com/currencies/shiba-inu/",
  },
  "farcaster-ink": {
    title: "Farcaster Ink",
    requirement: "Cast once on Warpcast",
    description:
      "This sticker celebrates your first 'cast' on Warpcast within the Farcaster network. It’s a milestone for those who have taken the step to engage in this decentralized social media platform, where users connect, share ideas, and build community in the blockchain space. Whether it’s a thought, an observation, or a creative expression, your first cast is a significant moment in exploring and contributing to the vibrant world of decentralized communication",
    url: "https://farcaster.xyz/",
  },
  "basepaint-nouns-base": {
    title: "The Yellow Collective on Base",
    requirement: "Mint a Collective Nouns on Base",
    description:
      "This sticker acknowledges your participation in The Yellow Collective by minting a Collective Nouns NFT on Base. It symbolizes your involvement in a community that blends art, blockchain technology, and collective creation. Minting a Collective Nouns NFT is not just about owning a piece of digital art; it’s about being part of a unique, creative movement in the ever-evolving world of NFTs and decentralized art communities",
    url: "https://www.yellowcollective.xyz/",
  },
  "basepaint-mickymouse-cc0": {
    title: "Celebrate Mickey Mouse CC0",
    requirement: "Mint Day #146 on Basepaint",
    description:
      "This sticker commemorates your participation in minting Day #146 on Basepaint, a special tribute to the iconic character Mickey Mouse as it enters the public domain (CC0). By minting this artwork, you become part of a unique event celebrating the crossover of classic characters into the world of free creative expression. It’s a significant moment that highlights the blend of traditional art and digital innovation, marking a new chapter in the legacy of beloved cultural icons.",
    url: "https://basepaint.xyz/canvas/146",
  },
  "piggy-bank": {
    title: "Piggy Bank",
    requirement: "Maintain a holding of Wrapped Bitcoin (wBTC) for a continuous period of at least one year.",
    description:
      "This sticker is a salute to your dedication and patience in the world of cryptocurrency, specifically for holding Wrapped Bitcoin (wBTC) for over a year. It celebrates your strategic approach to crypto investment and your belief in the potential of Bitcoin within the Ethereum ecosystem. This milestone symbolizes not just a long-term investment but also your understanding of the evolving dynamics between different blockchain technologies.",
    url: "https://wbtc.network/",
  },
  "gnosis-owl": {
    title: "Safe Owl",
    requirement: "Setup a multi-sig wallet with Gnosis Safe with at least 2 signers",
    description:
      "This sticker celebrates your smart approach to security in the crypto world. By setting up a multi-signature wallet with Gnosis Safe and ensuring at least two signers, you’re not just protecting your digital assets but also embracing collaborative security. This step shows your understanding of the importance of enhanced safety measures in managing digital assets and your commitment to responsible and secure crypto management.",
    url: "https://safe.global/",
  },
  "pizza": {
    title: "Bitcoin Pizza Day Commemoration",
    requirement: "Complete a transaction on Ethereum on Bitcoin Pizza Day",
    description:
      "This sticker honors the famous Bitcoin Pizza Day, celebrated annually on May 22nd, marking the day in 2010 when a programmer purchased two large pizzas for 10,000 Bitcoins. This event is widely regarded as the first real-world transaction using Bitcoin, symbolizing its potential as a digital currency. By completing a transaction on Ethereum on this historic day, you connect the pioneering spirit of Bitcoin with the innovative potential of Ethereum, commemorating the evolution and growth of cryptocurrency.",
    url: "https://en.wikipedia.org/wiki/Bitcoin_Pizza_Day",
    },
  "bull": {
    title: "Ethereum All-Time High Enthusiast",
    requirement: "Confirm your bullish prediction for Ethereum's all-time high on PolyMarket",
    description:
      "This sticker is awarded for demonstrating your bullish outlook on Ethereum by confirming your prediction on its potential to reach an all-time high on PolyMarket. It highlights your active engagement in the world of cryptocurrency speculation and your confidence in Ethereum's growth and potential in 2024. Your participation in this specific market reflects an analytical approach to crypto trends and a commitment to being at the forefront of blockchain technology's evolution.",
    url: "https://polymarket.com/event/ethereum-all-time-high-in-2024/ethereum-all-time-high-in-2024?tid=1711008161380",
    },
  "legit": {
    title: "Doge Enthusiast",
    requirement: "Have Dogecoin in your collection",
    description:
    "This sticker represents your support for Dogecoin. With a mix of views out there – some seeing it as a bit of a joke, others taking it more seriously – holding Dogecoin shows you're on the side of those who see its value and potential in the crypto world. It's a fun way to express your belief in Dogecoin's place in the diverse world of digital currencies.",
    url: "https://en.wikipedia.org/wiki/Dogecoin",
  },
};
