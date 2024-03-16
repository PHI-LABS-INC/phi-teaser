import { http, createConfig } from "wagmi";
import { base, sepolia } from "wagmi/chains";
import { coinbaseWallet, injected, walletConnect } from "wagmi/connectors";
import { walletConnectProjectID } from "./config";

export const config = createConfig({
  chains: [
    // base,
    sepolia,
  ],
  connectors: [injected(), walletConnect({ projectId: walletConnectProjectID, showQrModal: false })],
  ssr: true,
  transports: {
    // [base.id]: http(),
    [sepolia.id]: http(),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
