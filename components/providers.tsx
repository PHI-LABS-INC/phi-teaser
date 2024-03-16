"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { sepolia } from "viem/chains";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { config } from "@/lib/wagmi";
import { wcProjectID } from "@/lib/config";

const queryClient = new QueryClient();

createWeb3Modal({
  wagmiConfig: config,
  projectId: wcProjectID,
  defaultChain: sepolia,
  themeMode: "light",
  enableAnalytics: false,
  enableOnramp: false,
});

export function Providers(props: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>
    </WagmiProvider>
  );
}
