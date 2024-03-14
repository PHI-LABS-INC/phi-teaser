import { http, createConfig } from "wagmi";
import { base, sepolia } from "wagmi/chains";
import { coinbaseWallet, injected, walletConnect } from "wagmi/connectors";

export const config = createConfig({
  chains: [
    // base,
    sepolia,
  ],
  connectors: [
    injected(),
    coinbaseWallet({ appName: "Phi", headlessMode: true }),
    walletConnect({ projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID! }),
  ],
  ssr: true,
  transports: {
    // TODO
    // [base.id]: http(),
    [sepolia.id]: http(),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
