"use client";

import Image from "next/image";
import { useAccount, useEnsName } from "wagmi";
import { mainnet } from "viem/chains";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { css } from "@/styled-system/css";
import { flex } from "@/styled-system/patterns";
import WalletIcon from "@/public/icon/wallet.svg";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

export function Wallet() {
  const { address } = useAccount();
  // @ts-ignore
  const { data: ensName } = useEnsName({ address, chainId: mainnet.id });
  const { open } = useWeb3Modal();

  return address ? (
    <button
      onClick={() => open({ view: "Account" })}
      className={flex({
        align: "center",
        gap: "0.5rem",
        p: { base: "0.375rem 0.5rem", md: "0.5rem 0.75rem" },
        borderRadius: "2.5rem",
        border: "1px solid rgba(0, 0, 0, 0.06)",
        bgColor: "gray.100",
        boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.10)",
        cursor: "pointer",
      })}
    >
      <Avatar className={css({ w: "2rem", h: "2rem", border: "2px solid", borderColor: "gray.200" })}>
        <AvatarImage src={"https://metadata.ens.domains/mainnet/avatar/" + ensName} alt={"ens-icon-" + ensName} />
        <AvatarFallback />
      </Avatar>
      <p className={css({ color: "gray.800", fontSize: { base: "0.875rem", md: "1rem" }, fontWeight: 650 })}>
        {ensName || address?.slice(0, 6) + "..." + address?.slice(-4)}
      </p>
    </button>
  ) : (
    <button
      onClick={() => open({ view: "Connect" })}
      className={flex({
        align: "center",
        gap: "0.5rem",
        p: { base: "0.5rem 1rem", md: "0.75rem 1.5rem" },
        borderRadius: "2.5rem",
        bgColor: "gray.900",
        boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.10)",
        cursor: "pointer",
        _hover: { bgColor: "gray.800" },
        _active: { bgColor: "gray.700" },
      })}
    >
      <Image
        src={WalletIcon}
        alt="connect-icon"
        className={css({ w: { base: "1rem", md: "1.25rem" }, h: { base: "1rem", md: "1.25rem" } })}
      />
      <p className={css({ color: "textInvert", fontSize: { base: "0.875rem", md: "1rem" }, fontWeight: 650 })}>Connect</p>
    </button>
  );
}
