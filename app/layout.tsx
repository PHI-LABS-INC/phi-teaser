import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";
import { type ReactNode } from "react";
import { Providers } from "@/components/providers";
import { frontendURL } from "@/lib/config";
import { cx } from "@/styled-system/css";
import { flex } from "@/styled-system/patterns";

const roobert = localFont({
  src: [
    { path: "./font/RoobertPRO-Regular.woff2", weight: "400" },
    { path: "./font/RoobertPRO-Medium.woff2", weight: "500" },
    { path: "./font/RoobertPRO-SemiBold.woff2", weight: "650" },
    { path: "./font/RoobertPRO-Bold.woff2", weight: "750" },
  ],
});

const title = "Phi";
const description = "A decentralized identity layer for web3, empowering people to express their on-chain identity.";
export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: [
      { media: "(prefers-color-scheme: light)", url: "favicon/favicon.ico" },
      { media: "(prefers-color-scheme: dark)", url: "favicon/favicon-dark.ico" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  openGraph: {
    title,
    description,
    url: frontendURL,
    images: [{ url: frontendURL + "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    title,
    description,
    card: "summary_large_image",
    creator: "@phi_xyz",
    images: [frontendURL + "/og.png"],
  },
};

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cx(
          roobert.className,
          flex({
            direction: "column",
            align: "center",
            p: "1rem !important", // for radix-ui/dialog overlay
            w: "100%",
            bgColor: "bgWeak",
            scrollBehavior: "smooth",
            "& h1, h2, p": { _selection: { color: "indigo.500", bgColor: "indigo.0" } },
          })
        )}
      >
        <Providers>{props.children}</Providers>
      </body>
      <GoogleAnalytics gaId="G-MY4V7VW8J0" />
    </html>
  );
}
