import { base } from "viem/chains";
import { defineConfig } from "@wagmi/cli";
import { react } from "@wagmi/cli/plugins";
import phiTeaserNFTAbi from "@/lib/phi-teaser-nft";

export default defineConfig({
  out: "hooks/generated.ts",
  contracts: [
    {
      abi: phiTeaserNFTAbi,
      name: "PhiTetherNFT",
      address: {
        [base.id]: "0xe6083C0fd7bD9bd20e416b579E5639C4Cb759ddF",
      },
    },
  ],
  plugins: [react()],
});
