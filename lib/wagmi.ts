import { http, createConfig } from "wagmi";
import { base, sepolia } from "wagmi/chains";
import { injected, walletConnect } from "wagmi/connectors";
import { alchemyID, frontendURL, wcProjectID } from "./config";

const metadata = {
  name: "Phi",
  description: "A decentralized identity layer for web3, empowering people to express their on-chain identity.",
  url: frontendURL,
  icons: [frontendURL + "/logo.svg"],
};

export const config = createConfig({
  chains: [
    // base,
    sepolia,
  ],
  connectors: [injected(), walletConnect({ projectId: wcProjectID, metadata, showQrModal: false })],
  ssr: true,
  transports: {
    // [base.id]: http(),
    [sepolia.id]: http("https://eth-sepolia.g.alchemy.com/v2/" + alchemyID),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
