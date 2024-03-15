import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { type ReactNode } from "react";
import { Providers } from "@/components/providers";
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

export const metadata: Metadata = {
  title: "Phi",
  description: "Generated by create-wagmi",
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
    </html>
  );
}
