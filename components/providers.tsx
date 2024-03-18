"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { base } from "viem/chains";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { config } from "@/lib/wagmi";
import { wcProjectID } from "@/lib/config";

const queryClient = new QueryClient();

createWeb3Modal({
  wagmiConfig: config,
  projectId: wcProjectID,
  defaultChain: base,
  themeMode: "light",
  enableAnalytics: false,
  enableOnramp: false,
  // featuredWalletIds: [
  //   "ecc4036f814562b41a5268adc86270fba1365471402006302e70169465b7ac18",
  //   "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
  // ],
  allWallets: "ONLY_MOBILE",
});

export function Providers(props: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>
    </WagmiProvider>
  );
}
