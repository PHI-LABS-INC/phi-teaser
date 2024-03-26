"use client";

import Image from "next/image";
import { center } from "@/styled-system/patterns";
import Logo from "@/public/logo.svg";
import { Wallet } from "./wallet";

export function Header() {
  return (
    <>
      <div
        className={center({
          zIndex: "header",
          position: "fixed",
          top: { base: "calc(1rem + 0.75rem)", md: "calc(1rem + 1rem + 0.5rem)" },
          left: { base: "calc(1rem + 0.75rem)", md: "calc(1rem + 1.25rem + 0.5rem)" },
          h: { base: "2.5rem", md: "3rem" },
        })}
      >
        <Image src={Logo} alt="phi-logo" />
      </div>
      <div
        className={center({
          zIndex: "header",
          position: "fixed",
          top: { base: "calc(1rem + 0.75rem)", md: "calc(1rem + 1rem + 0.5rem)" },
          right: { base: "calc(1rem + 0.75rem)", md: "calc(1rem + 1.25rem + 0.5rem)" },
          h: { base: "2.5rem", md: "3rem" },
        })}
      >
        <Wallet />
      </div>
    </>
  );
}
