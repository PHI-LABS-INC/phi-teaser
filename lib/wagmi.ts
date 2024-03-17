import { http, createConfig } from "wagmi";
import { base } from "wagmi/chains";
import { coinbaseWallet, injected, walletConnect } from "wagmi/connectors";
import { alchemyID, frontendURL, wcProjectID } from "./config";

const metadata = {
  name: "Phi",
  description: "A decentralized identity layer for web3, empowering people to express their on-chain identity.",
  url: frontendURL,
  icons: [frontendURL + "/logo.svg"],
};

export const config = createConfig({
  chains: [base],
  connectors: [
    injected(),
    walletConnect({ projectId: wcProjectID, metadata, showQrModal: false }),
    coinbaseWallet({ appName: metadata.name }),
  ],
  ssr: true,
  transports: { [base.id]: http("https://base-mainnet.g.alchemy.com/v2/" + alchemyID) },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
