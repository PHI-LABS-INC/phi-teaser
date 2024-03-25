if (!process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || !process.env.NEXT_PUBLIC_WC_PROJECT_ID || !process.env.NEXT_PUBLIC_FRONTEND_URL) {
  throw new Error("Required env are not set.");
}

export const phiTeaserNFTContract = "0xc649989246FAa59bBefA7c65551cc4461E823320" as const;
export const alchemyID = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;
export const wcProjectID = process.env.NEXT_PUBLIC_WC_PROJECT_ID!;
export const frontendURL = process.env.NEXT_PUBLIC_FRONTEND_URL!;
