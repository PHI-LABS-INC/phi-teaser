import { http, createConfig } from "wagmi";
import { base } from "wagmi/chains";
import { coinbaseWallet, injected, walletConnect } from "wagmi/connectors";

export const config = createConfig({
  chains: [base],
  connectors: [
    injected(),
    coinbaseWallet({ appName: "Create Wagmi" }),
    walletConnect({ projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID! }),
  ],
  ssr: true,
  transports: {
    [base.id]: http(),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
